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

  const commandStyle = {
    boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF00FF, 0 0 70px #FF00FF, 0 0 80px #FF00FF, 0 0 100px #FF00FF, 0 0 150px #FF00FF",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#fff",
    textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF00FF, 0 0 70px #FF00FF, 0 0 80px #FF00FF, 0 0 100px #FF00FF, 0 0 150px #FF00FF",
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <div key={category.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <button
              className={`w-full shadow-lg shadow-amber-600/20 rounded-lg py-3 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white text-sm ${selectedCategory.name === category.name ? 'bg-amber-600' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap mt-10 justify-center">
        {selectedCategory.commands.map((command) => (
          <div key={command} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div style={commandStyle}>
              <div className="font-medium mb-2">{command}</div>
              <div className="text-gray-500">Command description goes here.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
