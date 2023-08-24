import React, {useEffect, useState} from 'react';

import styles from './ControlButton.module.css'

// TODO: change animate function

const ControlButton: React.FC<{color: string}> = (props) => {
  const [shouldBlink, setShouldBlink] = useState<boolean>();
  const [blinkStyle, setBlinkStyle] =  useState<string>();
  let selectedRight = false
  const {color}  = props;

  useEffect(() => {
    if (shouldBlink) {
      selectedRight ? setBlinkStyle(styles.right) : setBlinkStyle(styles.wrong);
    }

    const timeoutId = setTimeout(() => {
      setBlinkStyle('');
      setShouldBlink(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };

  }, [shouldBlink, selectedRight]);

  return (
    <button onClick={() => setShouldBlink(true)} className={`${styles.container} ${blinkStyle}`}>
      {color}
    </button>
  );
}

export default ControlButton;
