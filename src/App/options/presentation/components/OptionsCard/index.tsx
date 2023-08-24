import React, {useState} from 'react';
import Backdrop from "@/core/components/Backdrop";
import Nickname from "../../../../../core/components/Input";

import styles from './OptionsCard.module.css'
import {GameDifficulty} from "@/core/utils/enums";

// TODO: Receive props show:boolean
// TODO: finish styling the menu
// TODO: get player name to use on score
// TODO: Make difficulties change game;
// TODO: Extra: add Doom flames (deschamps when after clicking on hard)
// TODO: Make Reset All Data clear localstorage

function OptionsCard() {
  const [active, setActive] = useState<string>()

  return (
    <Backdrop>
      <div className={styles.container}>
        <button className={styles.closeBtn}>close</button>
        <h2 className={styles.title}>Game Options</h2>
        <Nickname/>
        <div className={styles.difficulty}>
          <p>Difficulty</p>
          <div className={styles.btnGroup}>
            <button className={`${styles.btn} ${active === 'EASY' ? styles.active : ''}`}
                    onClick={() => setActive('EASY')}>EASY
            </button>
            <button className={`${styles.btn} ${active === 'MEDIUM' ? styles.active : ''}`}
                    onClick={() => setActive('MEDIUM')}>MEDIUM
            </button>
            <button className={`${styles.btn} ${active === 'HARD' ? styles.active : ''}`}
                    onClick={() => setActive('HARD')}>HARD
            </button>
          </div>
        </div>
        <div className={styles.danger}>
          <span>&#9762;</span>
          <p>DANGER ZONE</p>
          <span>&#9762;</span>
        </div>
        <button className={styles.reset}>Reset all data</button>
      </div>
    </Backdrop>
  );
}

export default OptionsCard;
