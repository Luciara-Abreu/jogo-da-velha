import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Reseat() {
  const context = useContext(GameContext);

  return (
    <h1>
      Reseat
    </h1>
  )
}