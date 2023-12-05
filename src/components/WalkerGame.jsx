import React, { useState, useEffect } from 'react';
import {useGameContext} from '../enginge/gameContext';
import {Container, Row, Col} from 'react-bootstrap';
import terrain from '../assets/terrain/terran_1.png'
import player1 from '../assets/players/player_1.png'
import Button from './Button';
import PlayerPath from './PlayerPath';

function WalkerGame() {
  const context = useGameContext();
  
  const GridGame = ({ Rows, Columns }) => {
    const [grid, setGrid] = useState(() =>
    Array.from({ length: Rows }, () => Array(Columns).fill(null))
    );
    
    const [playerPosition, setPlayerPosition] = useState(context.initialPlayerPosition);

    const changePosition = (newRow, newColumn) => {
      const canMove = newRow >= 0 && newRow < Rows && newColumn >= 0 && newColumn < Columns;

      if (canMove) {
        setGrid((prevGrid) => {
          // Clear the old position
          // prevGrid[playerPosition.Row][playerPosition.Column] = null;
          // Move player to the new position, replace with player name
          prevGrid[newRow][newColumn] = 'Player';
          return [...prevGrid];
        });
    
        setPlayerPosition({ Row: newRow, Column: newColumn });
      }
    };
const displayGrid = () => {
  const calculateCellSize = () => {
    const baseCellSize = 0.3;
    const viewportWidth = window.innerWidth;
    return (viewportWidth * baseCellSize) / 100;
  };

  const cellSize = `${calculateCellSize()}vw`;  
  return (
    <Container
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${context.gridSize}, ${cellSize})`,
        gridTemplateRows: `repeat(${context.gridSize}, ${cellSize})`,
      }}

    >
      {grid.map((Row, RowIndex) => (
        Row.map((cell, colIndex) => (
          <div
            key={`${RowIndex}-${colIndex}`}
            style={{
              width: cellSize,
              height: cellSize,
              maxHeight: window.innerHeight,
              textAlign: 'center',
              lineHeight: cellSize,
              gridColumn: colIndex + 1,
              gridRow: RowIndex + 1,
              backgroundImage: cell === 'Player' ? `url(${player1})` : `url(${terrain})`,
              border: cell === 'Player' ? '3px solid #FF00B8' : 'white',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              color: 'rgba(0,0,0,0)',
            }}
          >
            {cell}
          </div>
        ))
      ))}
      <Row xs={12}>
        <PlayerPath playerPosition={playerPosition} />
      </Row>
    </Container>
    
  );
};

    return (
      <Col xs={12}>
        {displayGrid()}
          <>
            <Button label='Move Up' onClick={() => changePosition(playerPosition.Row - 1, playerPosition.Column)}/>
            <Button label='Move Down' onClick={() => changePosition(playerPosition.Row + 1, playerPosition.Column)} />
            <Button label='Move Left' onClick={() => changePosition(playerPosition.Row, playerPosition.Column - 1)} />
            <Button label='Move Right' onClick={() => changePosition(playerPosition.Row, playerPosition.Column + 1)} />
          </>
      </Col>

    );
  };

  return (
    <>
      <GridGame Rows={context.gridSize} Columns={context.gridSize} />

    </>
  );
}

const WalkerGameInstance = () => {
  return <WalkerGame />;
};

export default WalkerGameInstance;