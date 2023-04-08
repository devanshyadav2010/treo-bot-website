import { useState } from "react";

const commands = [
  { name: "/help", category: "Information" },
  { name: "/invite", category: "Utility" },
  { name: "/lyrics", category: "Utility" },
  { name: "/ping", category: "Information" },
  { name: "/stats", category: "Information" },
  { name: "/setdj", category: "Utility" },
  { name: "/play", category: "Utility" },
  { name: "/search", category: "Utility" },
  { name: "/stop", category: "Utility" },
  { name: "/skip", category: "Utility" },
  { name: "/back", category: "Utility" },
  { name: "/clear", category: "Utility" },
  { name: "/time", category: "Utility" },
  { name: "/queue", category: "Utility" },
  { name: "/pause", category: "Utility" },
  { name: "/resume", category: "Utility" },
  { name: "/volume", category: "Utility" },
  { name: "/nowplaying", category: "Utility" },
  { name: "/save", category: "Utility" },
  { name: "/loop", category: "Utility" },
  { name: "/filter", category: "Utility" },
];

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Information", "Economy", "Utility", "Antinuke", "Ticket", "Welcome"];

  const filteredCommands = selectedCategory === "All" ? commands : commands.filter((c) => c.category === selectedCategory);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">Bot Commands</h1>
      <div className="flex space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              category === selectedCategory ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 w-full">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Command</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCommands.map((command, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{command.name}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{command.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
