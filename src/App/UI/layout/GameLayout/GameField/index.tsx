import React from 'react';

import styles from './GameField.module.css';
import {GameStatus} from "@/App/utils/enums";
import {useGameContext} from "@/App/context/GameContext";
import ProgressBar from "@/App/UI/components/ProgressBar";

function GameField() {
  const {currentGameStatus, currentAttemptTimer, correctColor } = useGameContext();
  let currentColor:{};
  currentColor = currentGameStatus !== GameStatus.InGame ?  {} : { background: correctColor}
  let progress = ( currentAttemptTimer / 10) * 100 ;


  return (
    <>
      <div className={styles.container} style={currentColor}>
        {currentGameStatus === GameStatus.InGame ? <ProgressBar progress={Number(progress.toFixed(2))}/> : <></>}
      </div>
    </>
  );
}

export default GameField;
