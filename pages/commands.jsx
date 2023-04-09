import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import categories from '../data/categories';
import Modal from 'react-modal';

function Card({ command, handleClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="max-w-3xl w-full mx-4 my-6 bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold mb-4">{command.name}</h2>
        <p className="text-gray-600">{command.description}</p>

        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition duration-200"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1C5.038 1 1 5.037 1 10s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9zm4.243 13.536a.75.75 0 01-1.06 1.061L10 11.06l-3.182 3.536a.75.75 0 11-1.06-1.06L8.938 10 5.757 6.464a.75.75 0 111.06-1.06L10 8.94l3.182-3.536a.75.75 0 111.06 1.06L11.062 10l3.182 3.536z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Usage:</h3>
          <code className="bg-gray-100 rounded-md px-2 py-1 block">
            {command.usage}
          </code>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Aliases:</h3>
          <ul>
            {command.aliases.map((alias) => (
              <li key={alias}>{alias}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Examples:</h3>
          <ul>
            {command.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

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

  const handleCloseModal = () => {
setSelectedCommand(null);
};

return (
<div className="flex flex-col min-h-screen">
<header className="bg-gray-800 text-white py-4 px-8">
<h1 className="text-3xl font-bold">Commands</h1>
</header>
  <div className="flex flex-col flex-1">
    <div className="flex justify-between items-center bg-gray-100 py-4 px-8">
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-80 mr-4"
          placeholder="Search commands"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <AiOutlineSearch className="text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`text-gray-600 hover:text-gray-800 transition duration-200 ${
              selectedCategory.name === category.name &&
              'font-bold text-gray-800'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>

    <div className="flex-1 p-8 overflow-y-auto">
      {filteredCommands.map((command) => (
        <div
          key={command.name}
          className="cursor-pointer border-b border-gray-200 py-2"
          onClick={() => handleCommandClick(command)}
        >
          <h2 className="text-lg font-bold">{command.name}</h2>
          <p className="text-gray-600">{command.description}</p>
        </div>
      ))}
    </div>
  </div>

  <Modal
    isOpen={selectedCommand !== null}
    onRequestClose={handleCloseModal}
    contentLabel="Command Modal"
    className="Modal"
    overlayClassName="Overlay"
  >
    {selectedCommand !== null && (
      <Card command={selectedCommand} handleClose={handleCloseModal} />
    )}
  </Modal>
</div>

);
}

