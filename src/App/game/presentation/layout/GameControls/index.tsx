import React, {useEffect, useState} from 'react';
import ControlButton from "@/core/components/ControlButton";

import styles from './GameControls.module.css';
import {shuffleArray} from "@/core/services";

// TODO: connect with right answer
// TODO: add one or two extra answers according to difficulty level
// TODO: controls should only appear if game is started;

const GameControls: React.FC = () => {
  let colors = ['#FAFAFA', '#A34BC2', '#24093A'];


  return (
    <>
      <div className={styles.container}>
        {colors.map((color, idx) => <ControlButton key={idx+color} color={color}/>)}
      </div>
    </>
  );
}

export default GameControls;

