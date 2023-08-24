import React, {useEffect, useState} from 'react';

import styles from './StartTimer.module.css'
import Backdrop from "@/core/components/Backdrop";
import {useGameContext} from "@/core/context/GameContext";
import {GameStatus} from "@/core/utils/enums";

function StartTimer() {
  const [seconds, setSeconds] = useState(4);
  const {setCurrentGameStatus, setShowStartTimer} = useGameContext();

  useEffect(() => {

    if (seconds === 0) {
      setCurrentGameStatus(GameStatus.InGame);
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
  }, [seconds, setCurrentGameStatus, setShowStartTimer]);

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
