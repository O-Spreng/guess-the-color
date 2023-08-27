import React, {useState} from 'react';

import styles from './OptionsCard.module.css'
import {useGameContext} from "@/App/context/GameContext";
import OptionsContainer from "@/App/UI/layout/OptionsContainer/ index";
import {GameDifficulty, GameStatus} from "@/App/utils/enums";

function OptionsCard() {
  const {setShowOptionsMenu, resetAllData, difficulty, setDifficulty, currentGameStatus} = useGameContext();
  const [active, setActive] = useState<GameDifficulty>(difficulty);
  let isDisable = currentGameStatus === GameStatus.Paused;

  function handleCloseOptionsMenu() {
    setShowOptionsMenu(false)
  }

  function handleDifficultyChange(newDifficulty: GameDifficulty) {
    if (isDisable) {
      console.log('Difficulty change not allowed ');
      return;
    }
    console.log('Changing difficulty');
    setDifficulty(newDifficulty);
    setActive(newDifficulty);
  }

  return (
    <OptionsContainer>
      <button className={styles.closeBtn} onClick={handleCloseOptionsMenu}>close</button>
      <h2 className={styles.title}>Game Options</h2>
      <div className={styles.difficulty}>
        <p>Difficulty</p>
        <div className={styles.btnGroup}>
          <button className={`${styles.btn} ${active === GameDifficulty.Easy ? styles.active : ''}`}
                  onClick={() => handleDifficultyChange(GameDifficulty.Easy)} disabled={isDisable}>EASY
          </button>
          <button className={`${styles.btn} ${active === GameDifficulty.Medium ? styles.active : ''}`}
                  onClick={() => handleDifficultyChange(GameDifficulty.Medium)} disabled={isDisable}>MEDIUM
          </button>
          <button className={`${styles.btn} ${active === GameDifficulty.Hard ? styles.active : ''}`}
                  onClick={() => handleDifficultyChange(GameDifficulty.Hard)} disabled={isDisable}>HARD
          </button>
        </div>
      </div>
      <div className={styles.danger}>
        <span>&#9762;</span>
        <p>DANGER ZONE</p>
        <span>&#9762;</span>
      </div>
      <button className={styles.reset} onClick={resetAllData} disabled={isDisable}>Reset all data</button>
    </OptionsContainer>
  );
}

export default OptionsCard;
