import React from 'react';


import styles from './HomeButton.module.css';
import {useGameContext} from "@/core/context/GameContext";
import {GameStatus} from "@/core/utils/enums";
import Link from "next/link";

const HomeButton = () => {
  const {currentGameStatus,setCurrentGameStatus, showOptionsMenu} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused ? {} : {zIndex: 11};
  rise = showOptionsMenu ? {zIndex: 1} : {zIndex: 11};


  return (
    <Link href={'/'} className={styles.container} style={rise} onClick={() => setCurrentGameStatus( 'exit')}>
      Exit<br/>Game
    </Link>
  );
};

export default HomeButton;
