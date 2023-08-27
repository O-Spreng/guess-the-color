import React from 'react';

import styles from './PlayerPromptModal.module.css'

import OptionsContainer from "@/App/UI/layout/OptionsContainer/ index";
import Input from "@/App/UI/components/Input";


const PlayerPromptModal = () => {

  return (
    <OptionsContainer>
      <h2 className={styles.title}>Congratulations!</h2>
      <p>You set a new High Score!</p>
      <Input />
    </OptionsContainer>
  );
};

export default PlayerPromptModal;
