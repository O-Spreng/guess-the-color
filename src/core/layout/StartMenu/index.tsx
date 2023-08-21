import React from 'react';

import styles from './StartMenu.module.css';

function StartMenu() {
  return (
    <div className={styles.container}>
      <a>Arcade Mode</a>
      <a>Settings</a>
      <a>Exit</a>
    </div>
  );
}

export default StartMenu;
