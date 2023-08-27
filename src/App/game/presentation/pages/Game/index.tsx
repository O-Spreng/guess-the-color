import React from 'react';
import GameHUD from '../../layout/GameHUD';
import GameField from '../../layout/GameField';
import GameControls from '../../layout/GameControls';

import styles from './Game.module.css';
import AppLayout from "@/core/layout/AppLayout";
import OptionsCard from "@/App/options/presentation/components/OptionsCard";
import {useGameContext} from "@/core/context/GameContext";

const Game: React.FC = (props) => {
  const {showOptionsMenu} = useGameContext();

  return (
    <AppLayout showSidebar={true}>
      <div className={styles.container}>
        <GameHUD/>
        <GameField/>
        <GameControls/>
        {showOptionsMenu ? <OptionsCard/> : <></>}
      </div>
    </AppLayout>
  );
}

export default Game;
