import React, {useRef} from 'react';

import styles from './Input.module.css'

const Nickname = () => {
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = nicknameInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <label htmlFor='name'>User Name</label>
      <input type='text' id='name' ref={nicknameInputRef} placeholder={'Insert user name'}/>
      <div className={styles.row}>
        <button className={styles.confirm}>Ok</button>
        <button className={styles.clear}>Clear</button>
      </div>
    </form>
  );
};

export default Nickname;
