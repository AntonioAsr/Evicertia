import React, { useEffect, useState } from 'react';

const PlayerPath = ({ playerPosition }) => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    if (playerPosition) {
      setAllPositions((prevPositions) => [...prevPositions, playerPosition]);
    }
  }, [playerPosition]);

  return (
    <>
    <h3>Player Path:</h3>
    <div style={{display: 'flex', flexFlow: 'row'}}>      
      {
        allPositions.map((position, index) => (
          <span style={{display: 'inline-flex'}} key={index}>
            {`${String.fromCharCode(97 + position.Column)}${position.Row + 1}`}{'-'}
          </span>
      ))}
      </div>
    </>
  );
};

export default PlayerPath;
