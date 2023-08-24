import React from 'react';
import Link from 'next/link';

import styles from './MainMenu.module.css';
import GeneralContainer from '@/core/layout/GeneralContainer';
import AppLayout from '@/core/layout/AppLayout';

function MainMenu() {

  function closeApplication() {
    window.open("about:blank", "_self");
    window.close();
    // call match cleaner
  }

  return (
    <AppLayout>
      <GeneralContainer>
        <Link href={'/arcade'} className={styles.btn}>
          Arcade Mode
        </Link>
        <Link href={'/survival'} className={styles.btn}>
          Survival Mode
        </Link>
        <Link href={'leaderboard'} className={styles.btn}>
          Leaderboard
        </Link>
        <Link href={'/instructions'} className={styles.btn}>
          Instructions
        </Link>
        <button className={styles.btn} onClick={() => (alert('options menu caller'))}>
          Options
        </button>
        <button className={styles.btn} onClick={closeApplication}>
          Exit
        </button>
      </GeneralContainer>
    </AppLayout>
  );
}

export default MainMenu;
