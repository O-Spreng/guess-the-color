import React from 'react';

import styles from './GameField.module.css';
import ProgressBar from "@/core/components/ProgressBar";
import {GameStatus} from "@/core/utils/enums";
import {useGameContext} from "@/core/context/GameContext";

function GameField() {
  const {currentGameStatus, currAttemptTimer } = useGameContext();
  let currentColor:{};
  currentColor = currentGameStatus !== GameStatus.InGame ?  {} : { background: '#FBC00C'}
  let prog = ( currAttemptTimer / 10) * 100 ;


  return (
    <>
      <div className={styles.container} style={currentColor}>
        {currentGameStatus === GameStatus.InGame ? <ProgressBar progress={Number(prog.toFixed(2))}/> : <></>}
      </div>
    </>
  );
}

export default GameField;
