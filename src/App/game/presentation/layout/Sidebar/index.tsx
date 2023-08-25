import React from 'react';

import styles from './Sidebar.module.css';
import {GameStatus} from "@/core/utils/enums";
import {useGameContext} from "@/core/context/GameContext";
import PlayedMove from "@/core/components/PlayedMove";

// TODO: make sidebar drawable on mobile/small screens (or another solution)
// TODO: make head fixed and moves overflow scroll

function Sidebar() {
  const {match, lastMatch, currentGameStatus} = useGameContext();
  let currMatch = currentGameStatus === GameStatus.InGame || currentGameStatus === GameStatus.Paused ? match : lastMatch;

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
        {currMatch.currentMatchMoves.map((move, idx) => {
          let key = currMatch.id;
          return (
          <PlayedMove
            key={key+idx*16}
            guessedColor={move.selectedColor}
            correctColor={move.expectedColor}
            timeToGuess={move.elapsedTime}
          />
        )})}
      </div>
    </aside>
  );
}

export default Sidebar;
