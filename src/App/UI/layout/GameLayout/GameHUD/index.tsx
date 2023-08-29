import React from 'react';

import styles from './GameHUD.module.css'
import {useGameContext} from "@/App/context/GameContext";
import {GameStatus} from "@/App/utils/enums";
import HomeButton from "@/App/UI/components/HomeButton";
import GameTimer from "@/App/UI/components/GameTimer";
import ScoreDisplay from "@/App/UI/components/ScoreDisplay";
import OptionsButton from "@/App/UI/components/OptionsButton";
import StartButton from "@/App/UI/components/StartButton";

const GameHUD: React.FC = () => {
  const {currentGameStatus, showOptionsMenu} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused || showOptionsMenu ? {zIndex: 1} : {zIndex: 11};

  return (
    <div className={styles.container} style={rise}>
      {currentGameStatus === GameStatus.Paused? <HomeButton /> : <GameTimer />}
      <StartButton />
      {currentGameStatus === GameStatus.Paused? <OptionsButton /> : <ScoreDisplay />}
    </div>
  );
}

export default GameHUD;
