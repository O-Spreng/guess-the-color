import React, {useEffect, useState} from 'react';
import ControlButton from "@/core/components/ControlButton";

import styles from './GameControls.module.css';
import {shuffleArray} from "@/core/services";
import {GameStatus} from "@/core/utils/enums";
import {useGameContext} from "@/core/context/GameContext";

// TODO: add one or two extra answers according to difficulty level

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

