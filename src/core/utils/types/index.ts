import { ReactNode } from 'react';
import {GameDifficulty, GameMode, GameStatus, VisualTheme} from "@/core/utils/enums";

export type defaultProps = {
  children: ReactNode
}

export type GameContextProviderProps = {
  children: ReactNode,
  mode: GameMode
}

export type Move = {
  selectedColor: string,
  expectedColor: string,
  elapsedTime: number
};

export type Match = {
  id: string,
  player: string,
  currentScore: number,
  currentMatchMoves: Array<Move>,
  gameMode: GameMode,
}

export type GameContextObject = {
  difficulty: GameDifficulty,
  highScore: number,
  attempt: Move,
  match: Match,
  lastMatch: Match ,
  colors: Array<string>,
  correctColor: string,
  currentGameStatus: GameStatus,
  showStartTimer: boolean,
  showPauseInterface: boolean,
  currentMatchTimer: number,
  currentAttemptTimer: number,
  setCurrentGameStatus: (status: GameStatus, origin: string) => void,
  setShowStartTimer: (show: boolean) => void,
  setShowPauseInterface: (show: boolean) => void,
  setCurrentMatchTimer: (value: number) => void,
  setCurrentAttemptTimer: (value: number) => void,
  selectColor: (color: string) => void,
  startNewMatch: () => void,
}


export type OptionsContextObject = {
  gameDifficulty: GameDifficulty, // (EASY || MEDIUM | HARD)
  setGameDifficulty: () => void,
  theme: VisualTheme, // (DARK | LIGHT)
  setTheme: () => void,
  player: string,
  setPlayer: () => void,
  isFirstSession: boolean,
  setIsFirstSession:  () => void,
}