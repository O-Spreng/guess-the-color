import React from 'react';

import styles from './ScoreDisplay.module.css'

const ScoreDisplay = () => {
  const score = 2
  const highScore = 12;

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
          <p className={styles.value}>{score}</p>
        </div>
      </div>
    </>
  );
};

export default ScoreDisplay;
