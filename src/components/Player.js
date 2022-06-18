import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Player() {
  const context = useContext(GameContext);

  return (
    <h1>
      Player
    </h1>
  )
}