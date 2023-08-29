import React from 'react';

import styles from './OptionsButton.module.css';
import {useGameContext} from "@/App/context/GameContext";
import {GameStatus} from "@/App/utils/enums";
import useDeviceDetect from "@/App/hooks/useDeviceDetect";

const OptionsButton = () => {
  const {currentGameStatus, setShowOptionsMenu, showOptionsMenu} = useGameContext();
  const {isExtraSmallDevice} = useDeviceDetect();
  let rise = currentGameStatus !== GameStatus.Paused || showOptionsMenu ? {zIndex: 1} : {zIndex: 11};
  let show = <p>&#9881;</p>
  function handleOpenOptionsMenu() {
    setShowOptionsMenu(true);
  }

  return (
    <button className={styles.container} style={rise} onClick={handleOpenOptionsMenu}>
      {isExtraSmallDevice ? show : 'Options'}
    </button>
  );
};

export default OptionsButton;
