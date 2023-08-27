import React from 'react';

import styles from './PlayerPromptModal.module.css'
import Backdrop from "@/core/components/Backdrop";
import OptionsContainer from "@/core/layout/OptionsContainer/ index";
import Input from "@/core/components/Input";

const PlayerPromptModal = () => {

  return (
    <Backdrop>
      <OptionsContainer>
        <h2 className={styles.title}>Congratulations!</h2>
        <p>You set a new High Score!</p>
        <Input />
      </OptionsContainer>
    </Backdrop>
  );
};

export default PlayerPromptModal;
