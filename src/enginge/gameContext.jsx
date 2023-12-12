import React, { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState('');
  // dinamic grid size
  const [gameSize, setGameSize] = useState(10);
  const [gameData, setGameData] = useState({
    gridSize: gameSize,
    gameSize: {
      width: gameSize,
      height: gameSize,
    },
    players: [],
    initialPlayerPosition: { Row: 0, Column: 0 },
    player: selectedImage, // Initial value for player
  });

  const setInitialPlayerPosition = (newPosition) => {
    setGameData((prevGameData) => ({
      ...prevGameData,
      initialPlayerPosition: newPosition,
    }));
  };

  const selectImage = (image) => {
    setSelectedImage(image);
    setGameData((prevGameData) => ({
      ...prevGameData,
      player: image,
    }));
  };

  return (
    <GameContext.Provider value={{ ...gameData, setInitialPlayerPosition, selectImage }}>
      {children}
    </GameContext.Provider>
  );
};

// hook
const useGameContext = () => {
  return useContext(GameContext);
};

export { GameContext, GameContextProvider, useGameContext };

