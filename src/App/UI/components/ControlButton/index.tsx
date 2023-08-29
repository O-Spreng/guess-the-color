import React, {useEffect, useState} from 'react';

import styles from './ControlButton.module.css'
import {useGameContext} from "@/App/context/GameContext";
const ControlButton: React.FC<{color: string}> = (props) => {
  const {correctColor, selectColor, enableExperimentalFeedback} = useGameContext();
  const [shouldBlink, setShouldBlink] = useState<boolean>();
  const {color}  = props;
  const isRightColor = color === correctColor;
  const blinkStyle = shouldBlink ? (isRightColor ? styles.right : styles.wrong) : '';

  useEffect(() => {
    if (shouldBlink) {
      setTimeout(() => {
        selectColor(color);
        setShouldBlink(false);
      }, 500);
    }

  }, [shouldBlink]);

  if(enableExperimentalFeedback) {
    return (
      <button onClick={() => setShouldBlink(true)} className={`${styles.container} ${blinkStyle}`}>
        {color}
      </button>
    )
  }

  return (
    <button onClick={() => selectColor(color)} className={styles.container}>
      {color}
    </button>
  );
}

export default ControlButton;
