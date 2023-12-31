import React from 'react';

import styles from './LeaderboardPage.module.css';
import Link from "next/link";
import {getLeaderboardFromStorage} from "@/App/services/GameStorageProvider";
import AppLayout from "@/App/UI/layout/AppLayout";
import GeneralContainer from "@/App/UI/layout/GeneralContainer";


const LeaderboardPage = () => {
  const storedMatches = getLeaderboardFromStorage();
  return (
    <AppLayout>
      <GeneralContainer>
        <Link href={'/'} className={styles.closeBtn}>Close</Link>
        <h2 className={styles.title}>Leaderboard</h2>
        <div className={styles.content}>
          <div className={styles.head}><p>PLAYER</p><p>SCORE</p></div>
          {storedMatches.map((match) => <div key={match.id} className={styles.item}><p>{match.player}</p><span/>
            <p>{match.currentScore}</p></div>)}
        </div>
      </GeneralContainer>
    </AppLayout>
  );
};

export default LeaderboardPage;
