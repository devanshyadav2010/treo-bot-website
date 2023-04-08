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
      
      <div className="table w-full mt-10">
        <div className="table-row font-medium">
          {selectedCategory.commands.map((command) => (
            <div key={command} className="table-cell p-4 border-b-2 border-gray-200">
              {command}
            </div>
          ))}
        </div>
        <div className="table-row">
          {selectedCategory.commands.map((command) => (
            <div key={command} className="table-cell p-4 border-b border-gray-200">
              Command description goes here.
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .table {
          display: table;
          width: 100%;
        }
        .table-row {
          display: table-row;
        }
        .table-cell {
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          border-collapse: collapse;
        }
        @media screen and (max-width: 768px) {
          .flex-wrap {
            flex-wrap: wrap;
          }
          .table-row {
            display: block;
          }
          .table-cell {
            display: block;
            padding: 1rem;
            border: none;
            border-bottom: 1px solid #e2e8f0;
          }
          .table-cell:first-child {
            border-top: 1px solid #e2e8f0;
          }
        }
      `}</style>
    </div>
  );
}
