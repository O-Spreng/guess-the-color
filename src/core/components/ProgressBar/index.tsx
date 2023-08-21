import React from 'react';

import styles from './ProgressBar.module.css'

function ProgressBar() {
  let progressValue = 25;
  const progress = progressValue + '%'
  let bgColor = '#61fb37';
  if (progressValue < 50) {
    bgColor= '#fb9a37';
  }
  if (progressValue < 30) {
    bgColor= '#fb3737';
  }

  return (
    <div className={styles.container}>
      <div className={styles.progress} style={{width: progress, background: bgColor }} />
    </div>
  );
}

export default ProgressBar;
