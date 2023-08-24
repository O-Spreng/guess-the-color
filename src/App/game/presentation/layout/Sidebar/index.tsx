import React from 'react';

import styles from './Sidebar.module.css';
import PlayedMove from "@/core/components/PlayedMove";
import {GameMode} from "@/core/utils/enums";

// TODO: make sidebar drawable on mobile/small screens (or another solution)
// TODO: make head fixed and moves overflow scroll

function Sidebar() {
  const currGameMode = GameMode.Arcade.valueOf();

  let movesArray = [{"id": "mv_3", "guessedColor": "#5501da", "expectedColor": "#aee035", "timeToGuess": 4}, {
    "id": "mv_9",
    "guessedColor": "#8d4a21",
    "expectedColor": "#bfbad4", "timeToGuess": 7
  }, {
    "id": "mv_33",
    "guessedColor": "#c1a882",
    "expectedColor": "#c1a882", "timeToGuess": 2
  }, {
    "id": "mv_38",
    "guessedColor": "#3baab1",
    "expectedColor": "#3baab1", "timeToGuess": 9
  }, {
    "id": "mv_37",
    "guessedColor": "#d1699e",
    "expectedColor": "#d1699e", "timeToGuess": 4
  }, {
    "id": "mv_21",
    "guessedColor": "#ebc9bc",
    "expectedColor": "#ebc9bc", "timeToGuess": 3
  }, {
    "id": "mv_48",
    "guessedColor": "#fbc00c",
    "expectedColor": "#b746f2", "timeToGuess": 6
  }, {
    "id": "mv_16",
    "guessedColor": "#73250a",
    "expectedColor": "#411c0", "timeToGuess": 1
  }, {
    "id": "mv_46",
    "guessedColor": "#f643ab",
    "expectedColor": "#ef628e", "timeToGuess": 10
  }, {
    "id": "mv_7",
    "guessedColor": "#f74d5c",
    "expectedColor": "#f74d5c", "timeToGuess": 7
  }, {
    "id": "mv_2",
    "guessedColor": "#f79d80",
    "expectedColor": "#f79d80", "timeToGuess": 4
  }, {
    "id": "mv_30",
    "guessedColor": "#391619",
    "expectedColor": "#391619", "timeToGuess": 1
  }, {
    "id": "mv_28",
    "guessedColor": "#e19f74",
    "expectedColor": "#bdd212", "timeToGuess": 9
  }, {
    "id": "mv_4",
    "guessedColor": "#d6af4e",
    "expectedColor": "#d6af4e", "timeToGuess": 2
  }, {
    "id": "mv_49",
    "guessedColor": "#e1e107",
    "expectedColor": "#e1e107", "timeToGuess": 6
  }, {
    "id": "mv_18",
    "guessedColor": "#2ca8c3",
    "expectedColor": "#54f519", "timeToGuess": 8
  }, {
    "id": "mv_47",
    "guessedColor": "#abe69b",
    "expectedColor": "#abe69b", "timeToGuess": 7
  }, {
    "id": "mv_45",
    "guessedColor": "#dff11d",
    "expectedColor": "#dff11d", "timeToGuess": 3
  }, {
    "id": "mv_41",
    "guessedColor": "#72bf3a",
    "expectedColor": "#874807", "timeToGuess": 1
  }, {
    "id": "mv_34",
    "guessedColor": "#addcea",
    "expectedColor": "#addcea", "timeToGuess": 4
  }, {
    "id": "mv_31",
    "guessedColor": "#818dcf",
    "expectedColor": "#818dcf", "timeToGuess": 8
  }, {
    "id": "mv_44",
    "guessedColor": "#8267c9",
    "expectedColor": "#8267c9", "timeToGuess": 3
  }, {
    "id": "mv_20",
    "guessedColor": "#a425b5",
    "expectedColor": "#a904ee", "timeToGuess": 9
  },  {
    "id": "mv_17",
    "guessedColor": "#7e2714",
    "expectedColor": "#2577b0", "timeToGuess": 5
  },{
    "id": "mv_32",
    "guessedColor": "#dbf4ab",
    "expectedColor": "#dbf4ab", "timeToGuess": 2
  }, {
    "id": "mv_29",
    "guessedColor": "#26019a",
    "expectedColor": "#26019a", "timeToGuess": 8
  }];
  return (
    <aside className={styles.container}>
      <div className={styles.head}>
        <p className={styles.title}>Current/Latest Game</p>
        <div className={styles.subhead}>
          <p className={styles.guessed}>Guessed Color</p>
          <p className={styles.expected}>Correct Color</p>
          <p className={styles.score}>Score</p>
        </div>
      </div>
      <div className={styles.moves}>
        {movesArray.map((move, idx) =>
          <PlayedMove
            key={idx + 1}
            id={idx + 1}
            guessedColor={move.guessedColor}
            correctColor={move.expectedColor}
            timeToGuess={move.timeToGuess}
          />)}
      </div>
    </aside>
  );
}

export default Sidebar;
