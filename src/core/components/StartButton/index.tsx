import React from 'react';

import styles from './StartButton.module.css';
import {GameStatus} from "@/core/utils/enums";
import {useGameContext} from "@/core/context/GameContext";
import StartTimer from "@/core/components/StartTimer";
import Pause from "@/core/layout/Pause";

const StartButton: React.FC = () => {
  const {currentGameStatus, setCurrentGameStatus, showStartTimer, showPauseInterface} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused ? {} : {zIndex: 11}

  if (currentGameStatus === GameStatus.InGame || currentGameStatus === GameStatus.Paused) {
    return (
      <>
        <div className={styles.container}>
          {showStartTimer ? <StartTimer/> : <></>}
          {showPauseInterface ? <Pause/> : <></>}
          <button className={styles.pauseBtn} onClick={() => setCurrentGameStatus(currentGameStatus, 'pause')} style={rise}>
            {currentGameStatus === GameStatus.Paused ? 'RESUME' : 'PAUSE'}
          </button>
          <hr style={rise}/>
          <button className={styles.restartBtn} onClick={() => setCurrentGameStatus(currentGameStatus, 'restart')} style={rise}>
            RESTART
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {showStartTimer ? <StartTimer/> : <></>}
      <button className={styles.btn} onClick={() => setCurrentGameStatus(currentGameStatus, 'start')}>START</button>
    </>
  );
}

export default StartButton;
