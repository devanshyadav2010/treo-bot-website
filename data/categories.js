const categories = [  {    name: "General",    commands: [      {        name: "help",        description: "Displays a list of all available commands.",        usage: "!help"      },      {        name: "ping",        description: "Checks the bot's latency.",        usage: "!ping"      },      {        name: "info",        description: "Displays some information about the bot.",        usage: "!info"      }    ]
  },
  {
    name: "Moderation",
    commands: [
      {
        name: "kick",
        description: "Kicks a user from the server.",
        usage: "!kick <@user> <reason>"
      },
      {
        name: "ban",
        description: "Bans a user from the server.",
        usage: "!ban <@user> <reason>"
      },
      {
        name: "mute",
        description: "Mutes a user in the server.",
        usage: "!mute <@user> <duration> <reason>"
      }
    ]
  },
  {
    name: "Fun",
    commands: [
      {
        name: "meme",
        description: "Displays a random meme from a selection of subreddits.",
        usage: "!meme"
      },
      {
        name: "cat",
        description: "Displays a random cat picture.",
        usage: "!cat"
      },
      {
        name: "dog",
        description: "Displays a random dog picture.",
        usage: "!dog"
      }
    ]
  }
];

export default categories;
