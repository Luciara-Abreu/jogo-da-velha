import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Winner() {
  const context = useContext(GameContext);

  return (
    <h1>
      Winner
    </h1>
  )
}