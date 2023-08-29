import React from 'react';

import styles from './PlayedMove.module.css'
import {getLegibleTextColor} from "@/App/services";

function PlayedMove(props: any) {
  let { guessedColor, correctColor, timeToGuess} = props;
  let guessedFontColor = getLegibleTextColor(guessedColor);
  let correctFontColor = getLegibleTextColor(correctColor);

  if (guessedColor === correctColor) {
    return (
      <div className={styles.container} >
        <div className={styles.matching} style={{background: correctColor, color: correctFontColor}}>
          <p>{correctColor}</p>
        </div>
        <div className={styles.score}>
          <span className={styles.right}>&#10003;</span>
          <p>{timeToGuess}s</p>
        </div>
      </div>
    )
  }

  if (guessedColor === '=[') {
    return (
      <div className={styles.container} >
        <div className={styles.matching} style={{background: correctColor, color: correctFontColor}}>
          <p>{guessedColor}</p>
        </div>
        <div className={styles.score}>
          <span className={styles.wrong}>&#10007;</span>
          <p>{timeToGuess}s</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container} >
      <div className={styles.guessed} style={{background: guessedColor, color: guessedFontColor}}>
        <p>{guessedColor}</p>
      </div>
      <div className={styles.correct} style={{background: correctColor, color: correctFontColor}}>
        <p>{correctColor}</p>
      </div>
      <div className={styles.score}>
        <span className={styles.wrong}>&#10007;</span>
        <p>{timeToGuess}s</p>
      </div>
    </div>
  );
}

export default PlayedMove;
