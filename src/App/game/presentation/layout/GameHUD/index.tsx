import React from 'react';

import GameTimer from "@/core/components/GameTimer";
import StartButton from "@/core/components/StartButton";
import ScoreDisplay from "@/core/components/ScoreDisplay";

import styles from './GameHUD.module.css'

const GameHUD: React.FC = () => {
  return (
    <div className={styles.container}>
      <GameTimer />
      <StartButton />
      <ScoreDisplay />
    </div>
  );
}

export default GameHUD;
