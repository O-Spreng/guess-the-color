import React from 'react';

import styles from './GameTimer.module.css';
import {useGameContext} from "@/App/context/GameContext";
import useDeviceDetect from "@/App/hooks/useDeviceDetect";
import {GameStatus} from "@/App/utils/enums";

function GameTimer() {
  const {currentMatchTimer, currentGameStatus} = useGameContext();
  const {isExtraSmallDevice} = useDeviceDetect();

  return (
    <div className={`${styles.container} ${currentGameStatus! !== GameStatus.Stopped && currentMatchTimer <= 5 ? styles.warn : ''}`}>
      {!isExtraSmallDevice ?
        <p className={styles.text}>REMAINING<br/>TIME (s)</p> :
        <p className={styles.text}>TIME</p>
      }
      <p className={styles.value} >
        {currentMatchTimer}
      </p>
    </div>
  );
}

export default GameTimer;
