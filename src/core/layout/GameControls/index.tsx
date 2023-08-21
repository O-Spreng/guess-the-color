import React from 'react';
import ControlButton from "@/core/components/ControlButton";

import styles from './GameControls.module.css';

function GameControls() {
  return (
    <>
      <div className={styles.container}>
        <ControlButton color={'#FEFACA'}/>
        <ControlButton color={'#20EB65'}/>
        <ControlButton color={'#312335'}/>
      </div>
    </>
  );
}

export default GameControls;
