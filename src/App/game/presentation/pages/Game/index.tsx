import React from 'react';
import GameHUD from '../../layout/GameHUD';
import GameField from '../../layout/GameField';
import GameControls from '../../layout/GameControls';

import styles from './Game.module.css';
import AppLayout from "@/core/layout/AppLayout";
import {GameContextProvider} from "@/core/context/GameContext";
import OptionsCard from "@/App/options/presentation/components/OptionsCard";

const Game: React.FC = (props) => {

  return (
    <GameContextProvider >
      <AppLayout showSidebar={true}>
        <div className={styles.container}>
          <GameHUD/>
          <GameField/>
          <GameControls/>
          {/*<OptionsCard/>*/}
        </div>
      </AppLayout>
    </GameContextProvider>
  );
}

export default Game;
