import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import DiscordStrategy from 'passport-discord';
import passport from 'passport';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';

const MongoStore = connectMongo(session);

const options = {
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      scope: ['identify', 'email'],
    }),
  ],

  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'discord') {
        const { accessToken, refreshToken } = account;
        user.accessToken = accessToken;
        user.refreshToken = refreshToken;

        try {
          await user.save();
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },

    async session(session, user) {
      session.user = user;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  session: {
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  },

  debug: process.env.NODE_ENV === 'development',
};

const verifyCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ discordId: profile.id });

    if (existingUser) {
      existingUser.accessToken = accessToken;
      existingUser.refreshToken = refreshToken;

      const savedUser = await existingUser.save();
      return done(null, savedUser);
    }

    const newUser = new User({
      discordId: profile.id,
      email: profile.email,
      username: profile.username,
      avatar: profile.avatar,
      accessToken,
      refreshToken,
    });

    const savedUser = await newUser.save();
    return done(null, savedUser);
  } catch (error) {
    console.log(error);
    return done(error, null);
  }
};

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: `${process.env.NEXTAUTH_URL}/api/auth/callback/discord`,
      scope: ['identify', 'email'],
    },
    verifyCallback
  )
);

export default (req, res) => NextAuth(req, res, options);
