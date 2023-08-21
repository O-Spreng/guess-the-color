import React from 'react';

import HUD from "@/core/layout/HUD";
import GameField from "@/core/layout/GameField";
import GameControls from "@/core/layout/GameControls";
import StartMenu from "@/core/layout/StartMenu";
import StartTimer from "@/core/components/StartTimer";
import GameMenu from "@/core/layout/GameMenu";
import Sidebar from "@/core/layout/Sidebar";

import styles from './App.module.css';

function App() {
  return (
    <main className={styles.container}>

      <Sidebar/>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1>Guess The Color</h1>
        </div>
        <div className={styles.game}>
          {/*<StartTimer />*/}
          <HUD/>
          <GameField/>
          <GameControls/>
        </div>
        {/*<StartMenu />*/}
        {/*<GameMenu />*/}
      </div>
    </main>
  );
}

export default App;
