import React from 'react';

const categories = [  {    name: "Information",    commands: [      { name: "Help", description: "Get help with using the bot." },      { name: "User", description: "Get information about a user." }    ]
  },
  {
    name: "Economy",
    commands: [
      { name: "Servers", description: "Get information about the servers the bot is in." },
      { name: "Members", description: "Get information about the members in a server." }
    ]
  },
  {
    name: "Utility",
    commands: [
      { name: "Ping", description: "Get the latency of the bot." },
      { name: "Poll", description: "Create a poll for members to vote on." }
    ]
  }
];

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Commands</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.name}</td>
            <td>
              <ul>
                {category.commands.map((command, index) => (
                  <li key={index}>{command.name}: {command.description}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
