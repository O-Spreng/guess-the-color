import React, {useState} from 'react';

import styles from './GameField.module.css';
import ProgressBar from "@/core/components/ProgressBar";

function GameField() {

  return (
    <>
      <div className={styles.container}>
        <ProgressBar />
      </div>
    </>
  );
}

export default GameField;
