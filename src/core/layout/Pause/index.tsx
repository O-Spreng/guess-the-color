import React from 'react';
import Backdrop from "@/core/components/Backdrop";

import styles from './Pause.module.css'


const Pause = () => {
  return (
    <Backdrop>
      <div className={styles.container}>
        <p className={styles.paused}>GAME PAUSED</p>
      </div>
    </Backdrop>
  );
};

export default Pause;
