import React from 'react';
import Link from 'next/link';

import styles from './MainMenu.module.css';
import GeneralContainer from '@/core/layout/GeneralContainer';
import AppLayout from '@/core/layout/AppLayout';
import {useGameContext} from "@/core/context/GameContext";
import OptionsCard from "@/App/options/presentation/components/OptionsCard";

function MainMenu() {
  const {setShowOptionsMenu, showOptionsMenu} = useGameContext();

  function closeApplication() {
    window.open("about:blank", "_self");
    window.close();
    // call match cleaner
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
