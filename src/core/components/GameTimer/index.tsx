import React from 'react';


import styles from './GameTimer.module.css';
import {useGameContext} from "@/core/context/GameContext";

// TODO: create decreasing 30s timer;
// TODO: add or decrease time with right and wrong answers
// TODO: make timer show infinite if gamemode is survival showlives instead
function GameTimer() {
  const {currentMatchTimer} = useGameContext()

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
