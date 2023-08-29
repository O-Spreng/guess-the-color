import React from 'react';

import {defaultProps} from "@/App/utils/types";

import styles from './OptionsContainer.module.css'
import Backdrop from "@/App/UI/components/Backdrop";
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
