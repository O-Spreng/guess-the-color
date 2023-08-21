import React from 'react';
import Backdrop from "@/core/components/Backdrop";

import styles from './GameMenu.module.css'

function GameMenu() {
  return (
    <Backdrop>
      <div className={styles.container}>
        <p>Settings</p>
        <form>
          <p>Player Name</p>
          <input />
          <button>Confirm</button>
        </form>
        <div>
          <button >EASY</button>
          <button >MEDIUM</button>
          <button >HARD</button>
        </div>
        <p>&#9762; DANGER ZONE! &#9762;</p>
        <button>Reset all data</button>
      </div>
    </Backdrop>
  );
}

export default GameMenu;
