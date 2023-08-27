import React from 'react';

import styles from './OptionsButton.module.css';
import {useGameContext} from "@/core/context/GameContext";
import {GameStatus} from "@/core/utils/enums";

const OptionsButton = () => {
  const {currentGameStatus, setShowOptionsMenu, showOptionsMenu} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused ? {} : {zIndex: 11};
  rise = showOptionsMenu ? {zIndex: 1} : {zIndex: 11};

  function handleOpenOptionsMenu() {
    setShowOptionsMenu(true);
  }

  return (
    <button className={styles.container} style={rise} onClick={handleOpenOptionsMenu}>
      Options
    </button>
  );
};

export default OptionsButton;
