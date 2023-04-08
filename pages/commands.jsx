import { useState } from 'react';

const commands = [
  { name: '/help', category: 'Information' },
  { name: '/invite', category: 'Information' },
  { name: '/lyrics', category: 'Information' },
  { name: '/ping', category: 'Utility' },
  { name: '/stats', category: 'Utility' },
  { name: '/setdj', category: 'Utility' },
  { name: '/play', category: 'Utility' },
  { name: '/search', category: 'Utility' },
  { name: '/stop', category: 'Utility' },
  { name: '/skip', category: 'Utility' },
  { name: '/back', category: 'Utility' },
  { name: '/clear', category: 'Utility' },
  { name: '/time', category: 'Utility' },
  { name: '/queue', category: 'Utility' },
  { name: '/pause', category: 'Utility' },
  { name: '/resume', category: 'Utility' },
  { name: '/volume', category: 'Utility' },
  { name: '/nowplaying', category: 'Utility' },
  { name: '/save', category: 'Utility' },
  { name: '/loop', category: 'Utility' },
  { name: '/filter', category: 'Utility' },
  { name: '/antinuke', category: 'Antinuke' },
  { name: '/newticket', category: 'Ticket' },
  { name: '/welcome', category: 'Welcome' }
];

const CommandTable = ({ category }) => {
  const filteredCommands = commands.filter(cmd => cmd.category === category);
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredCommands.map(cmd => (
          <tr key={cmd.name}>
            <td className="border px-4 py-2">{cmd.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Commands() {
  const [activeCategory, setActiveCategory] = useState('Information');

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="flex items-center mb-4">
        {['Information', 'Economy', 'Utility', 'Antinuke', 'Ticket', 'Welcome'].map(cat => (
          <button
            key={cat}
            className={`mr-4 px-4 py-2 rounded-lg ${activeCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div>
        <CommandTable category={activeCategory} />
      </div>
    </div>
  );
}
