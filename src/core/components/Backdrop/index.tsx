import React, {ReactNode} from 'react';

import {defaultProps} from '../../utils/types';
import styles from './Backdrop.module.css';

const Backdrop:React.FC<defaultProps> = (props) => {
  return (
    <div className={styles.backdrop}>
      {props.children}
    </div>
  );
}

export default Backdrop;
