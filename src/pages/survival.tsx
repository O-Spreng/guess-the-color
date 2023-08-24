import React from 'react';
import Game from "@/App/game/presentation/pages/Game";
import { GameMode } from "@/core/utils/enums";

function Survival() {
  return (
    <>
      <Game mode={GameMode.Survival}/>
    </>
  );
}

export default Survival;
