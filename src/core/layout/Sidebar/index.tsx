import React from 'react';

import styles from './Sidebar.module.css';
import PlayedMove from "@/core/components/PlayedMove";

function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.head}>
        <p className={styles.title}>Current/Latest Game</p>
        <div className={styles.subhead}>
          <p className={styles.guessed}>Guessed Color</p>
          <p className={styles.expected}>Correct Color</p>
          <p className={styles.score}>Score</p>
        </div>
      </div>
      <div className={styles.moves}>
        <PlayedMove />
        <PlayedMove />
        <PlayedMove />
        <PlayedMove />
        <PlayedMove />
      </div>
    </aside>
  );
}

export default Sidebar;
