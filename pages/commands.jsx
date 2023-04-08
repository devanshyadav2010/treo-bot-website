import { useState } from 'react';

const categories = [  {    name: "Information",    commands: [      {        name: "Help",        description: "Get help with using the bot."      },      {        name: "User",        description: "Get information about a user."      }    ]
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
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2">Category</th>
            <th className="w-3/4 px-4 py-2">Commands</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr
              key={category.name}
              className={`bg-gray-100 hover:bg-gray-200 ${selectedCategory.name === category.name ? 'bg-amber-600 text-white' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <td className="border px-4 py-2">{category.name}</td>
              <td className="border px-4 py-2">
                <ul>
                  {category.commands.map((command) => (
                    <li key={command.name} className="mb-2">
                      <h2 className="text-lg font-bold mb-2">{command.name}</h2>
                      <p className="text-gray-600">{command.description}</p>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
