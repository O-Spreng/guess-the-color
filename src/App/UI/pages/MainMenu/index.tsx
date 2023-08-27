import React from 'react';
import Link from 'next/link';

import styles from './MainMenu.module.css';


import {useGameContext} from "@/App/context/GameContext";

import GeneralContainer from "@/App/UI/layout/GeneralContainer";
import AppLayout from "@/App/UI/layout/AppLayout";
import OptionsCard from "@/App/UI/layout/OptionsCard";

function MainMenu() {
  const {setShowOptionsMenu, showOptionsMenu} = useGameContext();

  function closeApplication() {
    window.open("about:blank", "_self");
    window.close();
  }

  function handleOpenOptionsMenu() {
    setShowOptionsMenu(true);
  }

  return (
    <AppLayout>
      <GeneralContainer>
        <Link href={'/arcade'} className={styles.btn}>
          Arcade Mode
        </Link>
        <Link href={'leaderboard'} className={styles.btn}>
          Leaderboard
        </Link>
        <Link href={'/instructions'} className={styles.btn}>
          Instructions
        </Link>
        <button className={styles.btn} onClick={handleOpenOptionsMenu}>
          Options
        </button>
        <button className={styles.btn} onClick={closeApplication}>
          Exit
        </button>
      </GeneralContainer>
      {showOptionsMenu ? <OptionsCard/> : <></>}
    </AppLayout>
  );
}

export default MainMenu;
