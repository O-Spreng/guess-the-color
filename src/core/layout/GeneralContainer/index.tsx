import React, { ReactNode } from 'react';

import { defaultProps } from '../../utils/types';
import styles from './GeneralContainer.module.css'


const GeneralContainer: React.FC<defaultProps> = (props) => {
  return (
    <>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  );
};

export default GeneralContainer;
