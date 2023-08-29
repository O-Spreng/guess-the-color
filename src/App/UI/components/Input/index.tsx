import React, {useRef} from 'react';

import styles from './Input.module.css'
import {useGameContext} from "@/App/context/GameContext";

const Nickname = () => {
  const {setShowPlayerPromptModal} = useGameContext()
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = nicknameInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    setShowPlayerPromptModal(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <input type='text' id='name' ref={nicknameInputRef} placeholder={'Insert player name'}/>
      <div className={styles.row}>
        <button className={styles.confirm} type={"submit"}>Ok</button>
        <button className={styles.clear} onClick={() => setShowPlayerPromptModal('')}>Dismiss</button>
      </div>
    </form>
  );
};

export default Nickname;
