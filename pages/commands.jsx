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
      <div className="flex flex-wrap flex-col md:flex-row md:justify-center">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`w-1/2 md:w-auto px-2 py-1 rounded-md text-center font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white ${selectedCategory.name === category.name ? 'bg-amber-600' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="table-container mt-8">
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Command</th>
              <th className="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {selectedCategory.commands.map((command) => (
              <tr key={command.name}>
                <td className="border px-4 py-2">{command.name}</td>
                <td className="border px-4 py-2">{command.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
