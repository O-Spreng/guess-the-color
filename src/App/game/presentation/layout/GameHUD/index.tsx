import React from 'react';
import StartButton from "@/core/components/StartButton";
import ScoreDisplay from "@/core/components/ScoreDisplay";

import styles from './GameHUD.module.css'
import {useGameContext} from "@/core/context/GameContext";
import {GameStatus} from "@/core/utils/enums";
import HomeButton from "@/core/components/HomeButton";
import GameTimer from "@/core/components/GameTimer";
import OptionsButton from "@/core/components/OptionsButton";

const GameHUD: React.FC = () => {
  const {currentGameStatus, showOptionsMenu} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused ? {} : {zIndex: 11};
  rise = showOptionsMenu ? {zIndex: 1} : {zIndex: 11};

  return (
    <div className={styles.container} style={rise}>
      {currentGameStatus === GameStatus.Paused? <HomeButton /> : <GameTimer />}
      <StartButton />
      {currentGameStatus === GameStatus.Paused? <OptionsButton /> : <ScoreDisplay />}
    </div>
  );
}

export default GameHUD;
