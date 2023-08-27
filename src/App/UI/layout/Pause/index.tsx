import React from 'react';

import styles from './Pause.module.css'
import Backdrop from "@/App/UI/components/Backdrop";


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
