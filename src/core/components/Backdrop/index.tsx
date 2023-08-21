import React from 'react';

import styles from './Backdrop.module.css';

function Backdrop(props:any) {
  return (
    <div className={styles.backdrop}>
      {props.children}
    </div>
  );
}

export default Backdrop;
