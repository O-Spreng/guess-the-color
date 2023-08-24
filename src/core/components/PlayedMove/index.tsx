import React from 'react';

import styles from './PlayedMove.module.css'
import {getLegibleTextColor} from "../../services";


function PlayedMove(props: any) {
  let {id, guessedColor, correctColor, timeToGuess} = props;
  let odd = id % 2;
  let guessedFontColor = getLegibleTextColor(guessedColor);
  let correctFontColor = getLegibleTextColor(correctColor);

  if (guessedColor === correctColor) {
    return (
      <div className={`${styles.container} ${odd === 0 && styles.odd}`}>
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

  return (
    <div className={`${styles.container} ${odd === 0 && styles.odd}`}>
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
