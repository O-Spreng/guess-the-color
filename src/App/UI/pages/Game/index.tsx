import React from 'react';

import styles from './Game.module.css';
import {useGameContext} from "@/App/context/GameContext";
import AppLayout from "@/App/UI/layout/AppLayout";
import GameHUD from "@/App/UI/layout/GameLayout/GameHUD";
import GameField from "@/App/UI/layout/GameLayout/GameField";
import GameControls from "@/App/UI/layout/GameLayout/GameControls";
import OptionsCard from "@/App/UI/layout/OptionsCard";
import PlayerPromptModal from "@/App/UI/layout/PlayerPromptModal";
import useDeviceDetect from "@/App/hooks/useDeviceDetect";
import MobileOptions from "@/App/UI/components/MobileOptions";

const Game: React.FC = (props) => {
  const {isExtraSmallDevice, isSmallDevice} = useDeviceDetect();
  const {showOptionsMenu, showPlayerPromptModal} = useGameContext();

  return (
    <AppLayout showSidebar={true}>
      <div className={styles.container}>
        {!isExtraSmallDevice ? <GameHUD/>: <></>}
        <GameField/>
        {!isExtraSmallDevice ? <GameControls/>: <></>}
        {showOptionsMenu ? <OptionsCard/> : <></>}
        {showPlayerPromptModal ? <PlayerPromptModal /> : <></>}
        { isSmallDevice ? <MobileOptions /> : <></>}
      </div>
    </AppLayout>
  );
}

export default Game;
