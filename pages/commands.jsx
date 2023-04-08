import { useState } from 'react';

const categories = [
  {
    name: "Information",
    commands: [
      {
        name: "Help",
        description: "Get help with using the bot."
      },
      {
        name: "User",
        description: "Get information about a user."
      }
    ]
  },
  {
    name: "Economy",
    commands: [
      {
        name: "Servers",
        description: "Get information about the servers the bot is in."
      },
      {
        name: "Members",
        description: "Get information about the members in a server."
      }
    ]
  },
  {
    name: "Utility",
    commands: [
      {
        name: "Ping",
        description: "Get the latency of the bot."
      },
      {
        name: "Poll",
        description: "Create a poll for members to vote on."
      }
    ]
  },
  {
    name: "Antinuke",
    commands: [
      {
        name: "Ban",
        description: "Ban a user from a server."
      },
      {
        name: "Kick",
        description: "Kick a user from a server."
      }
    ]
  },
  {
    name: "Ticket",
    commands: [
      {
        name: "Open",
        description: "Open a support ticket."
      },
      {
        name: "Close",
        description: "Close a support ticket."
      }
    ]
  },
  {
    name: "Welcome",
    commands: [
      {
        name: "Set",
        description: "Set the welcome message for a server."
      },
      {
        name: "Reset",
        description: "Reset the welcome message for a server."
      }
    ]
  }
];

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap flex-col md:flex-wrap md:-mx-2">
        {categories.map((category) => (
          <div key={category.name} className="md:w-1/3 md:px-2 mb-4">
            <button
              className={`w-25 h-12 shadow-lg shadow-amber-600/20 rounded-md py-2 px-2 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white ${selectedCategory.name === category.name ? 'bg-amber-600' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap mt-10">
        {selectedCategory.commands.map((command) => (
          <div key={command.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="h-full bg-white shadow-md rounded-md px-4 py-6 hover:shadow-lg transition duration-200">
              <h2 className="text-lg font-bold mb-2">{command.name}</h2>
              <p className="text-gray-600">{command.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
