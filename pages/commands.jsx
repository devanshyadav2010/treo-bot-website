import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import categories from '../data/categories';
import Modal from 'react-modal';

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchText, setSearchText] = useState('');
  const [selectedCommand, setSelectedCommand] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCommand(null);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setSelectedCommand(null);
  };

  const filteredCommands = selectedCategory.commands.filter((command) =>
    command.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCommandClick = (command) => {
    setSelectedCommand(command);
  };

  const handleCloseModal = () => {
    setSelectedCommand(null);
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

      <Modal isOpen={selectedCommand !== null} onRequestClose={handleCloseModal} className="modal">
        <div className="flex justify-between items-center mb-4">
          <h2 

          {selectedCommand && (
            <>
              <h2 className="text-2xl font-bold text-gray-900">{selectedCommand.name}</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </>
          )}
          {selectedCommand && (
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Usage:</h3>
              <p className="text-gray-600">{selectedCommand.usage}</p>
              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Description:</h3>
              <p className="text-gray-600">{selectedCommand.description}</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
