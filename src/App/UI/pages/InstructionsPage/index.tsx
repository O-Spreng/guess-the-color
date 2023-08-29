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
            <p>Each displayed color will have a set answer options depending on the selected difficulty,
              with only one being the correct color in hexadecimal format.</p>
          </div>

          <p className={styles.subtitle}>Arcade Mode</p>

          <div className={styles.block}>
            <p>Responding correctly: +5 points, +1 second</p>
            <p>Responding incorrectly: -1 point, -1 second</p>
            <p>Not responding in time: -2 points, -1 second</p>
          </div>

          <p className={styles.subtitle}>Difficulty Level</p>

          <div className={styles.block}>
            <p>Easy: 3 hexadecimal colors</p>
            <p>Medium: 4 hexadecimal colors.</p>
            <p>Hard: 5 hexadecimal colors.</p>
          </div>

          <p className={styles.subtitle}>Game Rules</p>

          <div className={styles.block}>
            <p>The player starts a game match by pressing the &ldquo;START&ldquo; button on the main menu.</p>
            <p>A random color will be displayed, along with a set of answers in hexadecimal format.</p>
            <p>The player has 10 seconds to select one of the answer options.</p>
            <p>After each answer or time limit, a new color is displayed, and the rules repeat.</p>
            <p>The side panel shows the history of colors from the current game session, highlighting correct and
              incorrect colors along with response times for each color.</p>
            <p>The game session has a total duration of 30 seconds.</p>
            <p>The player can restart the match at any time by pressing the &ldquo;RESTART&ldquo; button.</p>
            <p>The player can pause or resume the match at will by pressing &ldquo;PAUSE/RESUME&ldquo; button.</p>
            <p><b>A Game Needs a Name</b></p>
            <p>If the player set a new High Score, a pop-up will show and ask for the player nickname.</p>
            <p>In the case of dismissal of the pop-up, the score will still be set, but without a name.</p>
            <p>The rank of the high scores can be checked at the Leaderboard.</p>
          </div>

          <p className={styles.subtitle}>Hexadecimal Colors</p>

          <div className={styles.block}>
            <p><b>Representation</b>: A hex color is represented by a combination of six characters, consisting of numbers (0-9) and letters (A-F). These characters are used to define the intensity of the three primary colors: red, green, and blue (RGB).</p>
            <p><b>RGB Values</b>: Each hex color is essentially a combination of three values representing the intensity of the three primary colors: red, green, and blue. These values range from 00 (minimum intensity) to FF (maximum intensity), which is equivalent to 0 to 255 in decimal notation.</p>
            <p><b>Format</b>: A hex color is written as a pound sign (#) followed by six characters (3 pairs). The first two characters represent the red intensity, the next two represent green, and the last two represent blue.</p>
            <p>For example, the hex color <b>#FF0000</b> represents pure red (maximum red intensity), <b>#00FF00</b> represents pure green, and <b>#0000FF</b> represents pure blue.</p>
          </div>

          <p className={styles.subtitle}>Options Menu</p>

          <div className={styles.block}>
            <p>This menu allows the player to define some settings for the game.</p>
            <p>Select the desired difficulty level by clicking in one of the buttons of the difficulty selector.</p>
            <p>By default, the game is set to Easy.</p>
            <p><b>Highway to the Danger Zone</b></p>
            <p>In the Danger Zone the player turn on or off the experimental features.</p>
            <p>The visual feedback is a feature that allow the answer button to blink in a green color if the player choose the right option.</p>
            <p>If the selected answer was the wrong one, the button blinks in red and shakes.</p>
            <p>It may cause a laggy feeling during gameplay.</p>
            <p><b>One Button to delete them all</b></p>
            <p>The player can clear all saved data, by pressing the &ldquo;RESET ALL
              DATA&ldquo; button.</p>
            <p>Be cautious, once clicked there is no turn backs.</p>
          </div>
        </div>
      </GeneralContainer>
    </AppLayout>
  );
};

export default InstructionsPage;
