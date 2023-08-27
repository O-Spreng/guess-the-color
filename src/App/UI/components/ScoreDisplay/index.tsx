import React from 'react';

import styles from './ScoreDisplay.module.css'
import {useGameContext} from "@/App/context/GameContext";

const ScoreDisplay = () => {
  const {highScore, match} = useGameContext();

  return (
    <>
      <div className={styles.scores}>
        <div className={styles.scoreRow}>
          <p>HIGH<br/>SCORE</p>
          <p className={styles.value}>{highScore}</p>
        </div>
        <hr />
        <div className={styles.scoreRow}>
          <p>SCORE</p>
          <p className={styles.value}>{match.currentScore}</p>
        </div>
      </div>
    </>
  );
};

export default ScoreDisplay;
