import React from 'react';


import styles from './GameControls.module.css';
import {GameStatus} from "@/App/utils/enums";
import {useGameContext} from "@/App/context/GameContext";
import ControlButton from "@/App/UI/components/ControlButton";

const GameControls: React.FC = () => {
  const { currentGameStatus, colors} = useGameContext();

  if (currentGameStatus !== GameStatus.InGame) return <></>;
  return (
    <>
      <div className={styles.container}>
        {colors.map((color, idx) => <ControlButton key={idx+color} color={color}/>)}
      </div>
    </>
  );
}

export default GameControls;

