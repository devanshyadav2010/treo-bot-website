import { useState } from 'react';

const categories = [  {    name: 'Information',    commands: [      { name: 'help' },      { name: 'user' },    ],
  },
  {
    name: 'Economy',
    commands: [
      { name: 'balance' },
      { name: 'shop' },
    ],
  },
  {
    name: 'Utility',
    commands: [
      { name: 'poll' },
      { name: 'remind' },
    ],
  },
  {
    name: 'Antinuke',
    commands: [
      { name: 'ban' },
      { name: 'kick' },
    ],
  },
  {
    name: 'Ticket',
    commands: [
      { name: 'new' },
      { name: 'close' },
    ],
  },
  {
    name: 'Welcome',
    commands: [
      { name: 'greet' },
      { name: 'goodbye' },
    ],
  },
];

export default function CommandPage() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleClick(index)} style={{ margin: '5px' }}>
            {category.name}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {categories[selectedCategoryIndex].commands.map((command, index) => (
          <button key={index} style={{ margin: '5px' }}>
            {command.name}
          </button>
        ))}
      </div>
      <table style={{ margin: 'auto', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              {category.commands.map((command, index) => (
                <td key={index}>{command.name}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
