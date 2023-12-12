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
    <div style={{display: 'flex'}}>
      <h3 style={{color: '#ffffff', padding: '20px 20px 20px 20px'}}>Player Path:</h3>
    </div>
      <div style={{display: 'flex', padding: '0px 20px 20px 20px', color: '#ffffff', flexFlow: 'row', height: '141px'}}>
        Movimientos:
        {
          allPositions.map((position, index) => (
            <span style={{display: 'inline-flex', color: '#ffffff'}} key={index}>
              {`${String.fromCharCode(97 + position.Column)}${position.Row + 1}`}{'-'}
            </span>
        ))}
        </div>
    </>
  );
};

export default PlayerPath;
