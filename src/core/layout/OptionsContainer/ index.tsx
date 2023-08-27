import React from 'react';
import Backdrop from "@/core/components/Backdrop";
import {defaultProps} from "@/core/utils/types";

import styles from './OptionsContainer.module.css'
const OptionsContainer: React.FC<defaultProps> = (props) => {
  return (
    <Backdrop >
      <div className={styles.container}>
        {props.children}
      </div>
    </Backdrop>
  );
};

export default OptionsContainer;
