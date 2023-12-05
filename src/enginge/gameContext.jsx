import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAddPlayerMutation, useMovePlayerMutation } from '../api/walkGame';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [addPlayer] = useAddPlayerMutation();
  const [selectedImage, setSelectedImage] = useState('');

  const [gameSize, setGameSize] = useState(10)
  const [gameData, setGameData] = useState({
    gridSize: gameSize,
    gameSize: {
      width: gameSize,
      height: gameSize,
    },
    players: [],
    // default position until response from add player
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

