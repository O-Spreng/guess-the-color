import React from 'react';
import Link from "next/link";

import styles from './InstructionsPage.module.css';
import AppLayout from "@/App/UI/layout/AppLayout";
import GeneralContainer from "@/App/UI/layout/GeneralContainer";

const InstructionsPage = () => {
  return (
    <AppLayout>
      <GeneralContainer>
        <Link href={'/'} className={styles.closeBtn}>Close</Link>
        <h2 className={styles.title}>Instructions</h2>
        <div className={styles.content}>


          <p className={styles.subtitle}>Game Objective</p>
          <div className={styles.block}>
            <p>The objective of the game is to correctly identify as many colors as possible within a 30-second
              timeframe.</p>
            <p>Each displayed color will have three answer options, with one correct color in hexadecimal format and two
              incorrect colors.</p>
          </div>

          <p className={styles.subtitle}>Arcade Mode</p>

          <div className={styles.block}>
            <p>Not responding in time: -2 points.</p>
            <p>Responding incorrectly: -1 point.</p>
            <p>Responding correctly: +5 points.</p>
          </div>

          <p className={styles.subtitle}>Game Rules</p>

          <div className={styles.block}>
            <p>The player starts a game match by pressing the &ldquo;START&ldquo; button on the main menu.</p>
            <p>A random color will be displayed, along with three answer options in hexadecimal format.</p>
            <p>The player has 10 seconds to select one of the answer options.</p>
            <p>After each answer or time limit, a new color is displayed, and the rules repeat.</p>
            <p>The side panel shows the history of colors from the current game session, highlighting correct and
              incorrect colors along with response times for each color.</p>
            <p>The game session has a total duration of 30 seconds.</p>
            <p>The player can restart the match at any time by pressing the &ldquo;RESTART&ldquo; button.</p>
            <p>The player can pause or resume the match at will by pressing &ldquo;PAUSE/RESUME&ldquo; button.</p>
            <p>The player can register it&apos;s nickname for set records by filling the pop-up at the first match, or
              in the options menu at any time.</p>
            <p>If there is no player nickname set, the game will save the high scores without a name.</p>
            <p>The player can clear all saved data, including records, by pressing the &ldquo;RESET ALL
              DATA&ldquo; button.</p>
          </div>
        </div>
      </GeneralContainer>
    </AppLayout>
  );
};

export default InstructionsPage;
