import React, {useEffect} from 'react';

import styles from './StartButton.module.css';
import {GameStatus} from "@/core/utils/enums";
import {useGameContext} from "@/core/context/GameContext";
import StartTimer from "@/core/components/StartTimer";
import Pause from "@/core/layout/Pause";
import useArcadeTimer from "@/core/hooks/useArcadeTimer";

const StartButton: React.FC = () => {
  const {currentGameStatus, setCurrentGameStatus, showStartTimer, setShowStartTimer, showPauseInterface,setShowPauseInterface, currAttemptTimer, currMatchTimer, setCurrMatchTimer, setCurrAttemptTimer} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused ? {} : {zIndex: 11}
  let {matchTimer, attemptTimer} = useArcadeTimer(currentGameStatus, setCurrentGameStatus);

  useEffect(() => {
    setCurrMatchTimer(matchTimer);
    setCurrAttemptTimer(attemptTimer);
  }, [matchTimer, attemptTimer, setCurrMatchTimer, setCurrAttemptTimer]);

  function handleStatusChange(status: GameStatus, origin: string) {
    if (currentGameStatus === GameStatus.Stopped && origin === 'start') {
      setShowStartTimer(true);
    }

    if (currentGameStatus === GameStatus.InGame && origin === 'pause') {
      setCurrentGameStatus(GameStatus.Paused);
    }

    if (currentGameStatus === GameStatus.Paused && origin === 'pause') {
      setShowPauseInterface(false)
      setShowStartTimer(true)
    }


    if (currentGameStatus === GameStatus.Paused && origin === 'restart' || currentGameStatus === GameStatus.InGame && origin === 'restart') {
      setCurrentGameStatus(GameStatus.Stopped);
      setShowStartTimer(true);
    }
  }

  if (currentGameStatus === GameStatus.InGame || currentGameStatus === GameStatus.Paused) {
    return (
      <>
        <div className={styles.container}>
          {showStartTimer ? <StartTimer/> : <></>}
          {showPauseInterface ? <Pause/> : <></>}
          <button className={styles.pauseBtn} onClick={() => handleStatusChange(currentGameStatus, 'pause')} style={rise}>
            {currentGameStatus === GameStatus.Paused ? 'RESUME' : 'PAUSE'}
          </button>
          <hr style={rise}/>
          <button className={styles.restartBtn} onClick={() => handleStatusChange(currentGameStatus, 'restart')} style={rise}>
            RESTART
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {showStartTimer ? <StartTimer/> : <></>}
      <button className={styles.btn} onClick={() => handleStatusChange(currentGameStatus, 'start')}>START</button>
    </>
  );
}

export default StartButton;
