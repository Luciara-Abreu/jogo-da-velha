import React from "react";

import GameContextProvider from '../contexts/GameContext';
import Board from "../components/Board";

export default function Home() {
   // eslint-disable-next-line
  return (
    // eslint-disable-next-line
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}