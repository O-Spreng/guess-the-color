import React, {useState} from 'react';
import Backdrop from "@/core/components/Backdrop";
import Input from "../../../../../core/components/Input";

import styles from './OptionsCard.module.css'
import {useGameContext} from "@/core/context/GameContext";
import OptionsContainer from "@/core/layout/OptionsContainer/ index";

// TODO: get player name to use on score
// TODO: Make difficulties change game;
// TODO: Extra: add Doom flames (deschamps when after clicking on hard)

function OptionsCard() {
  const { showOptionsMenu, setShowOptionsMenu, setShowPauseInterface, resetAllData } = useGameContext();
  const [active, setActive] = useState<string>()

  function handleCloseOptionsMenu() {
    setShowOptionsMenu(false)
  }

  return (
    <Backdrop>
      <OptionsContainer >
        <button className={styles.closeBtn} onClick={handleCloseOptionsMenu}>close</button>
        <h2 className={styles.title}>Game Options</h2>
        <Input/>
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
        <button className={styles.reset} onClick={resetAllData}>Reset all data</button>
      </OptionsContainer>
    </Backdrop>
  );
}

export default OptionsCard;
