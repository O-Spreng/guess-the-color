import React from 'react';
import GameTimer from "@/core/components/GameTimer";
import StartButton from "@/core/components/StartButton";

import styles from './hud.module.css'
function HUD() {
  return (
    <div className={styles.container}>
      <GameTimer />
      <StartButton />
      <div className={styles.scores}>
        <div className={styles.scoreRow}>
          <p>HIGH<br/>SCORE</p>
          <p className={styles.value}>12</p>
        </div>
        <hr />
        <div className={styles.scoreRow}>
          <p>SCORE</p>
          <p className={styles.value}>12</p>
        </div>
      </div>
    </div>
  );
}

export default HUD;
