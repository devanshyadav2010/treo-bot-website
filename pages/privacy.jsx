export default function Privacy() {

    return (
        <div>
            <h1 className="font-semibold text-3xl text-white/75">Privacy Policy for Treo</h1>
            <p className="text-sm text-white/30 mb-4">Last Update: 20/05/2022  🆕️</p>
  <div className="animateHeader text-white text-opacity-40 mt-5">
        <h2 className="font-semibold text-3xl text-white/75">Usage Of Data</h2>
        <p>⊳ The bot may use stored data for different purposes, including but not limited to:

Storing the guild-specific settings of the bot (Corresponding commands)
Providing the command handling of the bot
Feature usage
No usage of data outside the aforementioned cases will happen and under no circumstances will the data be shared with third parties</p>
        <div className="py-3"></div>
    <h2 className="font-semibold text-3xl text-white/75">Stored Information</h2>
        <p>⊳ The bot may store the following information upon a User using Certain Commands:

-Their Database is stored within mongodb and kept privately in my files

No other information outside the above-mentioned one will be stored AUTOMATICALLY.</p>
        <div className="py-3"></div>
    <h2 className="font-semibold text-3xl text-white/75">Updating Data</h2>
        <p>⊳ The data may be updated when using specific commands. Updating data will require the input of an end user, and data that can be seen as sensitive, such as content of a message, may need to be stored when using certain commands.

No other actions may update the stored information at any given time.</p>
        <div className="py-3"></div>
    <h2 className="font-semibold text-3xl text-white/75">Removal Of Data</h2>
    <br>
        <h3 className="font-semibold text-3xl text-white/75">Automatic removal</h3>
        <p>⊳ Stored Data can be removed automatically through means of removing the bot from a Server. This can be achieved by either kicking or banning the bot from the server. Re-inviting the bot will add the same default values, as mentioned above, back to the bot's' database..</p>   
        <div className="py-3"></div>
        <p>⊳ Astra bot does not save any data based on users.</p>
        <div className="py-3"></div>
        <p>⊳ While using the bot, your user ID is saved and deleted in the system for 60 seconds for once.</p> 
    
        </div>
            </div>
    );
};
