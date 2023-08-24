import React from 'react';
import GameHUD from '../../layout/GameHUD';
import GameField from '../../layout/GameField';
import GameControls from '../../layout/GameControls';

import styles from './Game.module.css';
import {GameMode, GameStatus} from "@/core/utils/enums";
import AppLayout from "@/core/layout/AppLayout";
import {useGameContext} from "@/core/context/GameContext";

// TODO: manage what to show if ARCADE or SURVIVAL
const Game: React.FC<{mode: GameMode}> = (props) => {
  const {currentGameStatus}= useGameContext();
  const {mode} = props;

  return (
    <AppLayout showSidebar={true}>
      <div className={styles.container}>
        <GameHUD />
        <GameField />
        {currentGameStatus === GameStatus.InGame ? <GameControls /> : <></> }
      </div>
    </AppLayout>
  );
}

export default Game;
