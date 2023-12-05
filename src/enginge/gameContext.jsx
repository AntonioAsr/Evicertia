import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAddPlayerMutation, useMovePlayerMutation } from '../api/walkGame';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [addPlayer] = useAddPlayerMutation();

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
  })

  const addPlayerToGrid = async () => {
    addPlayer().unwrap().then((data)=>{
      const {position} = data;
      console.log('pos',position)
      setInitialPlayerPosition({ Row: position.row, Column: position.column });
    })
  };

   const setInitialPlayerPosition = (newPosition) => {
    setGameData((prevGameData) => ({
      ...prevGameData,
      initialPlayerPosition: newPosition,
    }));
  };  

  return (
    <GameContext.Provider value={{...gameData, setInitialPlayerPosition}}>
      {children}
    </GameContext.Provider>
  );
};

// hook
const useGameContext = () => {
  return useContext(GameContext);
};

export { GameContext, GameContextProvider, useGameContext };

