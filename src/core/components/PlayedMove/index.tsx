import React from 'react';

import styles from './PlayedMove.module.css'

function PlayedMove() {
  return (
    <li className={styles.container}>
      <div className={styles.guessed} style={{background: '#FFFFFF'}}>
        <p>#FFFFFF</p>
      </div>
      <div className={styles.correct} style={{background: '#000000'}}>
        <p>#000000</p>
      </div>
      <div className={styles.score}>
        <span className={styles.wrong}>&#10007;</span>
        <p>3s</p>
      </div>
    </li>
  );
}

export default PlayedMove;
