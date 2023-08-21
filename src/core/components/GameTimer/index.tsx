import React from 'react';


import styles from './GameTimer.module.css';

function GameTimer() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>REMAINING<br/>TIME (s)</p>
      <p className={styles.value}>13</p>
    </div>
  );
}

export default GameTimer;
