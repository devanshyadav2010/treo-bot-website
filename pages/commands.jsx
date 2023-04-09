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

      <div className="flex flex-wrap mt-10" style={{display: 'flex', flexWrap: 'wrap'}}>
        {filteredCommands.map((command) => (
          <div key={command.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4" style={{width: '25%'}}>
            <div className="h-full bg-white shadow-md rounded-md px-4 py-6 hover:shadow-lg transition duration-200">
              <h2 className="text-lg font-bold mb-2 cursor
</h2>
              <p className="text-gray-700 mb-4">{command.description}</p>
              <button className={`text-lg font-bold ${selectedCommand === command ? 'text-amber-500' : 'text-gray-900'} mb-2`} onClick={() => handleCommandClick(command)}>
  {command.name}
</button>

              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
  <Modal isOpen={selectedCommand !== null} onRequestClose={() => setSelectedCommand(null)} className="modal" overlayClassName="overlay">
    {selectedCommand && (
      <div>
        <h1 className="text-2xl font-bold mb-4">{selectedCommand.name}</h1>
        <p className="text-gray-700 mb-4">{selectedCommand.description}</p>
        <h3 className="text-lg font-bold mb-2">Usage:</h3>
        <code className="text-gray-700 mb-4">{selectedCommand.usage}</code>
        <h3 className="text-lg font-bold mb-2">Examples:</h3>
        {selectedCommand.examples.map((example) => (
          <div key={example.description} className="mb-4">
            <h4 className="text-md font-bold mb-1">{example.description}</h4>
            <code className="text-gray-700">{example.code}</code>
          </div>
        ))}
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition duration-200" onClick={() => setSelectedCommand(null)}>
          Close
        </button>
      </div>
    )}
  </Modal>
</div>
);
}
