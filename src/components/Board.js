import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import Square from './Square';

export default function Board() {
  const { squares } = useContext(GameContext);
  return
  // eslint-disable-next-line
  <div className="board-container">
    <div className="board">
      {squares.map((value, index) => (
        <Square />
      ))}
    </div>
  </div>;
}