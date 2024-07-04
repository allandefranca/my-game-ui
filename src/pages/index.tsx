import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  const games = [
    {
      name: 'Spider Man 2',
      playTime: '2h 40min',
      progress: '20%',
      lastTrophie: 'Leave Us Alone',
      cover: '/images/SM2-Small.jpeg',
      background: '/images/SM2-Big.jpeg',
    },
    {
      name: 'Death Stranding',
      playTime: '21min',
      progress: '1%',
      lastTrophie: 'The Particle of God',
      cover: '/images/DS-Small-Big.jpg',
      background: '/images/DS-Small-Big.jpg',
    },
    {
      name: 'The Last of Us',
      playTime: '10h 20min',
      progress: '62%',
      lastTrophie: 'Lets Gear Up',
      cover: '/images/TLOU-Small.jpeg',
      background: '/images/TLOU-Big.jpeg',
    },
    {
      name: 'CyberPunk 2077',
      playTime: '30min',
      progress: '4%',
      lastTrophie: 'The Particle of God',
      cover: '/images/CP-Small-Big.jpeg',
      background: '/images/CP-Small-Big.jpeg',
    },
    {
      name: 'Gran Turismo 7',
      playTime: '1h',
      progress: '5%',
      lastTrophie: 'Living Your Car Life',
      cover: '/images/GT-Small.jpeg',
      background: '/images/GT-Big.jpeg',
    },
    {
      name: 'Hogwarts Legacy',
      playTime: '40min',
      progress: '25%',
      lastTrophie: 'The Toast of the Town',
      cover: '/images/Hl-Small.jpg',
      background: '/images/Hl-Big.jpg',
    },
    // {
    //   name: 'Elden Ring',
    //   playTime: '49min',
    //   progress: '2%',
    //   lastTrophie: 'Dragonlord Placidusax',
    //   cover: '/images/ER-Small.jpeg',
    //   background: '/images/ER-Big.jpeg',
    // },
  ];

  const selectedGameBackground = {
    backgroundImage: `url(${games[selectedGame].background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen flex flex-col" style={selectedGameBackground}>
      <header className="flex items-center justify-between p-4 bg-gray-900 bg-opacity-75 text-white relative">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="material-icons">wifi</span>
            <span>{currentTime}</span>
          </div>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-400">Store</a>
          <a href="#" className="bg-white text-black rounded-full px-2 hover:text-gray-400">My Games</a>
          <a href="#" className="hover:text-gray-400">Favorites</a>
          <a href="#" className="hover:text-gray-400">Settings</a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="material-icons">notifications</span>
          <div className="flex items-center space-x-2">
            <div className="relative mr-3">
              <span className="material-icons absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-green-500 rounded-full w-3 h-3"></span>
              <img
                src="/images/user-icon.jpeg"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <div className='flex flex-col'>
              <span>Yogi_Bear</span>
              <div className='flex flex-row'>
                <span className="material-icons">emoji_events</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow p-4 bg-gray-900 bg-opacity-75 text-white flex flex-col items-start justify-end">
        <div className="flex mb-40 ml-10">
          <div className="w-full">
            <h2 className="text-5xl font-bold">{games[selectedGame].name}</h2>
            <div className="mt-4 flex">
              <div className="flex flex-col mr-6">
                <p className="font-thin">Play Time</p>
                <p className='text-3xl'>{games[selectedGame].playTime}</p>
              </div>
              <div className="flex flex-col mr-6">
                <p className="font-thin">Progress</p>
                <p className='text-3xl'>{games[selectedGame].progress}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-thin">Last Trophie</p>
                <p className='text-3xl'>{games[selectedGame].lastTrophie}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mb-10 ml-10">
          {games.map((game, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-300 ease-in-out snap-center ${selectedGame === index ? 'transform scale-105' : ''}`}
              onClick={() => setSelectedGame(index)}
            >
              <img
                src={game.cover}
                alt={game.name}
                className={`w-64 h-80 object-cover rounded-3xl transition-transform duration-300 ease-in-out ${selectedGame === index ? 'border-4 border-white' : ''}`}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
