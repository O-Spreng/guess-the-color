import React from 'react';

import styles from './GameTimer.module.css';
import {useGameContext} from "@/App/context/GameContext";

function GameTimer() {
  const {currentMatchTimer} = useGameContext();

  return (
    <div className={styles.container}>
      <p className={styles.text}>REMAINING<br/>TIME (s)</p>
      <p className={`${styles.value} ${currentMatchTimer <= 5 ? styles.warn : ''}`} >
        {currentMatchTimer}
      </p>
    </div>
  );
}

export default GameTimer;
