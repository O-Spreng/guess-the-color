import React, {useEffect, useState} from 'react';

import styles from './StartTimer.module.css'
import Backdrop from "@/core/components/Backdrop";
import {useGameContext} from "@/core/context/GameContext";
import {GameStatus} from "@/core/utils/enums";

function StartTimer() {
  const [seconds, setSeconds] = useState(4);
  const {currentGameStatus, setCurrentGameStatus, setShowStartTimer, startNewMatch} = useGameContext();

  useEffect(() => {

    if (seconds === 0 && currentGameStatus !== GameStatus.Paused) {
      startNewMatch();
      setShowStartTimer(false);
    }

    if (seconds === 0 && currentGameStatus === GameStatus.Paused) {
      setCurrentGameStatus(GameStatus.InGame, 'pause')
      setShowStartTimer(false);
    }

    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(interval)
      };
    }
  }, [currentGameStatus, seconds, setCurrentGameStatus, setShowStartTimer, startNewMatch]);

  return (
    <Backdrop>
      <div className={styles.container}>
        {
          seconds === 1 ? <p className={styles.go}>GO!!!</p> : (
            <>
              <p className={styles.text}>Get Ready!</p>
              <p className={styles.sec}>{seconds - 1}</p>
            </>
          )
        }
      </div>
    </Backdrop>
  );
}

export default StartTimer;
