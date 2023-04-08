import { useState } from 'react';

const categories = [  {    name: 'Information',    commands: [      {        name: '!help',        description: 'Displays the list of available commands',      },      {        name: '!about',        description: 'Displays information about the bot',      },      {        name: '!serverinfo',        description: 'Displays information about the current server',      },    ],
  },
  {
    name: 'Economy',
    commands: [
      {
        name: '!balance',
        description: 'Displays your current balance',
      },
      {
        name: '!daily',
        description: 'Gives you your daily reward',
      },
      {
        name: '!pay',
        description: 'Pays a user from your balance',
      },
    ],
  },
  {
    name: 'Utility',
    commands: [
      {
        name: '!poll',
        description: 'Creates a poll',
      },
      {
        name: '!weather',
        description: 'Displays the current weather',
      },
      {
        name: '!remindme',
        description: 'Sets a reminder for you',
      },
    ],
  },
  {
    name: 'Antinuke',
    commands: [
      {
        name: '!antiraid on',
        description: 'Turns on the antiraid system',
      },
      {
        name: '!antiraid off',
        description: 'Turns off the antiraid system',
      },
    ],
  },
  {
    name: 'Ticket',
    commands: [
      {
        name: '!newticket',
        description: 'Opens a new ticket',
      },
      {
        name: '!closeticket',
        description: 'Closes the current ticket',
      },
    ],
  },
  {
    name: 'Welcome',
    commands: [
      {
        name: '!welcome on',
        description: 'Turns on the welcome system',
      },
      {
        name: '!welcome off',
        description: 'Turns off the welcome system',
      },
    ],
  },
];

export default function Commands() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function handleCategoryClick(category) {
    setCurrentCategory(category);
  }

  return (
    <div className="py-10">
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`${
              currentCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-indigo-600'
            } px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="max-w-2xl mx-auto">
        {currentCategory.commands.map((command) => (
          <div key={command.name} className="py-2">
            <div className="text-lg font-medium">{command.name}</div>
            <div className="text-sm text-gray-500">{command.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
