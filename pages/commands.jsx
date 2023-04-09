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
            <p className="text-gray-600">{selectedCommand.description}</p>

<button className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition duration-200" onClick={() => setSelectedCommand(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1C5.038 1 1 5.037 1 10s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9zm4.243 13.536a.75.75 0 01-1.06 1.061L10 11.06l-3.182 3.536a.75.75 0 11-1.06-1.06L8.938 10 5.757 6.464a.75.75 0 111.06-1.06L10 8.94l3.182-3.536a.75.75 0 111.06 1.06L11.062 10l3.182 3.536z" clipRule="evenodd" />
                </svg>
              </button>
              <p className="text-gray-600 mt-4">{selectedCommand.description}</p>
            </div>
          </div>
       
      )}
    </div>
  );
}
