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
  }
];


export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  const [buttonBgColor, setButtonBgColor] = useState('gray-300');
  
  const handleButtonClick = () => {
    setButtonBgColor('blue-600');
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <div key={category.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <button
              className={`w-full shadow-lg shadow-amber-600/20 rounded-md py-2 px-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white ${selectedCategory.name === category.name ? 'bg-amber-600' : buttonBgColor}`}
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
            <div className="bg-white border border-gray-200 rounded-lg p-4 h-full">
              <div className="font-medium mb-2">{command.name}</div>
              <div className="text-gray-500">{command.description}</div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        className={`bg-${buttonBgColor} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        onClick={handleButtonClick}
      >
        Change button color
      </button>
    </div>
  );
}
