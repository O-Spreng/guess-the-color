import React, {useState} from 'react';

import styles from './OptionsCard.module.css'
import {useGameContext} from "@/App/context/GameContext";
import OptionsContainer from "@/App/UI/layout/OptionsContainer/ index";
import {GameDifficulty, GameStatus} from "@/App/utils/enums";

function OptionsCard() {
  const {setShowOptionsMenu, resetAllData, difficulty, setDifficulty, currentGameStatus, enableExperimentalFeedback, setEnableExperimentalFeedback} = useGameContext();
  const [active, setActive] = useState<GameDifficulty>(difficulty);
  let isDisable = currentGameStatus === GameStatus.Paused;

  function handleCloseOptionsMenu() {
    setShowOptionsMenu(false)
  }

  function handleExperimentalFeatures() {
    setEnableExperimentalFeedback(!enableExperimentalFeedback);
  }

  function handleDifficultyChange(newDifficulty: GameDifficulty) {
    if (isDisable) {
      return;
    }
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
      <p>Turn On Experimental Control Visual Feedback</p>
      <button className={styles.experimental} onClick={handleExperimentalFeatures}>{enableExperimentalFeedback? 'Turn off': 'Turn On'}</button>
      <p>Clear All Game Data.</p>
      <button className={styles.reset} onClick={resetAllData} disabled={isDisable}>Reset All Data</button>
      <p>Caution, all records will be lost forever.</p>
    </OptionsContainer>
  );
}

export default OptionsCard;
