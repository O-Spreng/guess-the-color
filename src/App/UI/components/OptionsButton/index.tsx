import React from 'react';

import styles from './OptionsButton.module.css';
import {useGameContext} from "@/App/context/GameContext";
import {GameStatus} from "@/App/utils/enums";

const OptionsButton = () => {
  const {currentGameStatus, setShowOptionsMenu, showOptionsMenu} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused || showOptionsMenu ? {zIndex: 1} : {zIndex: 11};

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
