import { useState } from "react";

const categories = [
  { name: "Information", commands: ["Help", "User"] },
  { name: "Economy", commands: ["Servers", "Members"] },
  { name: "Utility", commands: ["Ping", "Weather"] },
  { name: "Antinuke", commands: ["Ban", "Kick"] },
  { name: "Ticket", commands: ["New", "Close"] },
  { name: "Welcome", commands: ["Set", "Clear"] }
];

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="categories">
        {categories.slice(0, 3).map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className={
              selectedCategory.name === category.name ? "active" : ""
            }
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="categories">
        {categories.slice(3).map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className={
              selectedCategory.name === category.name ? "active" : ""
            }
          >
            {category.name}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>{selectedCategory.name}</th>
          </tr>
        </thead>
        <tbody>
          {selectedCategory.commands.map((command) => (
            <tr key={command}>
              <td>{command}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .categories {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }
        button {
          margin-right: 10px;
          padding: 5px 10px;
          border: none;
          background-color: transparent;
          color: #333;
          font-size: 16px;
          cursor: pointer;
        }
        .active {
          color: #0070f3;
          border-bottom: 2px solid #0070f3;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        th,
        td {
          text-align: left;
          padding: 8px;
        }
        th {
          font-weight: bold;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}
