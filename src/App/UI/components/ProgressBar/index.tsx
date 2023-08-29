import React from 'react';

import styles from './ProgressBar.module.css'

const ProgressBar: React.FC<{progress: number}> = (props: any) => {
  let {progress} = props;

  let progressValue = progress + '%'
  let bgColor = '#61fb37';

  if (!progress) {
    progress = 0;
  }
  if (progress > 100) {
    progress = 100;
  }
  if (progress < 50) {
    bgColor= '#fb8237';
  }
  if (progress < 30) {
    bgColor= '#fb3737';
  }

  return (
    <div className={styles.container}>
      <div className={styles.progress} style={{width: progressValue, background: bgColor }} />
    </div>
  );
}

export default ProgressBar;
