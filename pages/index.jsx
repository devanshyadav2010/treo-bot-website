import { useState } from "react";

const commandCategories = [  {    name: "Information",    description: "Commands that provide information about the server or its members.",    commands: [      {        name: "!help",        description: "Display a list of available commands.",      },      {        name: "!info",        description: "Display information about the server.",      },      {        name: "!rules",        description: "Display the server's rules.",      },    ],
  },
  {
    name: "Economy",
    description: "Commands that relate to the server's economy or currency system.",
    commands: [
      {
        name: "!balance",
        description: "Display your account balance.",
      },
      {
        name: "!shop",
        description: "Display the server's shop.",
      },
      {
        name: "!buy [item]",
        description: "Buy an item from the server's shop.",
      },
    ],
  },
  {
    name: "Utility",
    description: "Commands that provide utility functions, such as time zone conversions or weather reports.",
    commands: [
      {
        name: "!timezone [location]",
        description: "Display the current time in a specified time zone.",
      },
      {
        name: "!weather [location]",
        description: "Display the current weather in a specified location.",
      },
    ],
  },
  {
    name: "Antinuke",
    description: "Commands that protect the server from malicious actions or spam.",
    commands: [
      {
        name: "!ban [user] [reason]",
        description: "Ban a user from the server.",
      },
      {
        name: "!kick [user] [reason]",
        description: "Kick a user from the server.",
      },
      {
        name: "!mute [user] [duration] [reason]",
        description: "Mute a user for a specified duration.",
      },
    ],
  },
  {
    name: "Ticket",
    description: "Commands that create or manage support tickets.",
    commands: [
      {
        name: "!newticket [issue]",
        description: "Create a new support ticket with a specified issue.",
      },
      {
        name: "!closeticket [ticket]",
        description: "Close a support ticket with a specified ID.",
      },
    ],
  },
  {
    name: "Welcome",
    description: "Commands that welcome new users to the server or provide introductions.",
    commands: [
      {
        name: "!welcome [user]",
        description: "Send a welcome message to a new user.",
      },
      {
        name: "!intro",
        description: "Introduce yourself to the server.",
      },
    ],
  },
];

export default function Commands() {
  const [currentCategory, setCurrentCategory] = useState(commandCategories[0]);

  return (
    <div>
      <div className="py-10 flex justify-center">
        {commandCategories.map((category) => (
          <button
            key={category.name}
            className={`mx-2 px-6 rounded-md py-2 font-medium ${
              currentCategory.name === category.name
                ? "bg-gradient-to-bl from-amber-700 to-amber-500 text-white shadow-lg shadow-amber-600/20"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="px-10">
        <h2 className="text-3 {currentCategory.commands.map((command) => (
          <div key={command.name} className="py-2">
            <div className="text-lg font-medium">{command.name}</div>
            <div className="text-sm text-gray-500">{command.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

