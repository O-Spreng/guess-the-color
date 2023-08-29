import React from 'react';

import styles from './GameField.module.css';
import {GameStatus} from "@/App/utils/enums";
import {useGameContext} from "@/App/context/GameContext";
import ProgressBar from "@/App/UI/components/ProgressBar";
import useDeviceDetect from "@/App/hooks/useDeviceDetect";
import GameHUD from "@/App/UI/layout/GameLayout/GameHUD";
import GameControls from "@/App/UI/layout/GameLayout/GameControls";

function GameField() {
  const {currentGameStatus, currentAttemptTimer, correctColor} = useGameContext();
  const {isExtraSmallDevice} = useDeviceDetect();
  let currentColor: {};
  currentColor = currentGameStatus !== GameStatus.InGame ? {} : {background: correctColor}
  let progress = (currentAttemptTimer / 10) * 100;


  return (
    <>
      <div className={styles.container} style={currentColor}>
        {isExtraSmallDevice ? <GameHUD/> : <></>}
        {currentGameStatus === GameStatus.InGame ? <ProgressBar progress={Number(progress.toFixed(2))}/> : <></>}
        {isExtraSmallDevice ? <span className={styles.helper}>&nbsp;</span> : <></>}
        {isExtraSmallDevice ? <GameControls/> : <></>}
      </div>
    </>
  );
}

export default GameField;
