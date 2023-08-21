import React from 'react';

import styles from './ControlButton.module.css'

function ControlButton(props: any) {
  const { color } = props;

  return (
    <div className={styles.container}>
      <a>{color}</a>
    </div>
  );
}

export default ControlButton;
