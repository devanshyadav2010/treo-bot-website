import { useState } from 'react';

const categories = [
  {
    name: "Information",
    commands: ["Help", "User"]
  },
  {
    name: "Economy",
    commands: ["Servers", "Members"]
  },
  {
    name: "Utility",
    commands: ["Ping", "Poll"]
  },
  {
    name: "Antinuke",
    commands: ["Ban", "Kick"]
  },
  {
    name: "Ticket",
    commands: ["Open", "Close"]
  },
  {
    name: "Welcome",
    commands: ["Set", "Reset"]
  }
];

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <div key={category.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <button
              className={`w-full shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white ${selectedCategory.name === category.name ? 'bg-amber-600' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap mt-10">
        {selectedCategory.commands.map((command) => (
          <div key={command} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="border border-gray-200 rounded-lg p-4 h-full">
              <div className="font-medium mb-2">{command}</div>
              <div className="text-gray-500">Command description goes here.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
