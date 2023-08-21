import React from 'react';

import styles from './StartTimer.module.css'
import Backdrop from "@/core/components/Backdrop";

function StartTimer() {
  return (
    <Backdrop>
      <div className={styles.container}>
        <h2>Get Ready!</h2>
        <p>3</p>
      </div>
    </Backdrop>
  );
}

export default StartTimer;
