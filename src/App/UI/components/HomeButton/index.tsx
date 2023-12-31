import React from 'react';

import styles from './HomeButton.module.css';
import {useGameContext} from "@/App/context/GameContext";
import {GameStatus} from "@/App/utils/enums";
import Link from "next/link";

const HomeButton = () => {
  const {currentGameStatus,setCurrentGameStatus, showOptionsMenu} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused || showOptionsMenu ? {zIndex: 1} : {zIndex: 11};

  return (
    <Link href={'/'} className={styles.container} style={rise} onClick={() => setCurrentGameStatus( 'exit')}>
      Exit<br/>Game
    </Link>
  );
};

export default HomeButton;
