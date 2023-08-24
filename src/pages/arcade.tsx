import React from 'react';
import Game from "@/App/game/presentation/pages/Game";
import {GameMode} from "@/core/utils/enums";

function Arcade() {
  return (
    <>
      <Game mode={GameMode.Arcade} />
    </>
  );
}

export default Arcade;
