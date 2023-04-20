import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import categories from '../data/categories';
import Modal from 'react-modal';

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchText, setSearchText] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredCommands = selectedCategory.commands.filter((command) =>
    command.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const [selectedCommand, setSelectedCommand] = useState(null);

  const handleCommandClick = (command) => {
    setSelectedCommand(command);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Commands</h1>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative rounded-md shadow-sm">
            <input
              type="search"
              name="search"
              id="search"
              value={searchText}
              onChange={handleSearchTextChange}
              className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search commands"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <div key={category.name} className="md:w-1/3 md:px-2 mb-4" style={{marginRight: '10px'}}>
            <button
              className={`w-full md:w-auto h-10 shadow-md rounded-md py-1 px-1 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white ${selectedCategory.name === category.name ? 'bg-amber-600' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap mt-10">
        {filteredCommands.map((command) => (
          <div key={command.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="h-full bg-white shadow-md rounded-md px-4 py-6 hover:shadow-lg transition duration-200">
              <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={() => handleCommandClick(command)}>{command.name}</h2>
              <p className="text-gray-600">{command.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCommand && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="max-w-3xl w-full mx-4 my-6 bg-white shadow-md rounded-md p-8">
            <h2 className="text-2xl font-bold mb-4">{selectedCommand.name}</h2>
            <p className="text-gray-600 mb-4">{selectedCommand.description}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200"
                onClick={() => setSelectedCommand(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
bash
Copy code
</div>
);
}
