
import { FaStars } from 'react-icons/fa';

export default function Developers() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <img className="w-64" src="/img/bck4.png" alt="Background" />
      </div>
      <h1 className="py-7 text-4xl font-extrabold text-center text-white">
        <FaStars className="text-amber-400 mr-2 text-6xl inline-block" />
        Developers
      </h1>

      <div className="flex justify-center">
        <DiscordWidget imageUrl="https://discord.c99.nl/widget/theme-2/980069165459198022.png" />
      </div>
      <div className="flex justify-center">
        <DiscordWidget imageUrl="https://discord.c99.nl/widget/theme-2/903237169722834954.png" />
      </div>
    </div>
  );
}

function DiscordWidget({ imageUrl }) {
  return (
    <img className="w-96 shadow-lg rounded-lg" src={imageUrl} alt="Discord Widget" />
  );
}
