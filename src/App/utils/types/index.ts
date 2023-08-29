import { ReactNode } from 'react';
import {GameDifficulty, GameStatus} from "@/App/utils/enums";

export type defaultProps = {
  children: ReactNode
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
  showOptionsMenu: boolean,
  showPlayerPromptModal: boolean,
  currentMatchTimer: number,
  currentAttemptTimer: number,
  enableExperimentalFeedback: boolean,
  sidebarOpen: boolean,
  setSidebarOpen: (show: boolean) => void,
  setEnableExperimentalFeedback: (enable: boolean) => void,
  setDifficulty: (newDifficulty: GameDifficulty) => void,
  setCurrentGameStatus: (origin: string) => void,
  setShowStartTimer: (show: boolean) => void,
  setShowOptionsMenu: (show: boolean) => void,
  setShowPauseInterface: (show: boolean) => void,
  setShowPlayerPromptModal: (username: string) => void,
  setCurrentMatchTimer: (value: number) => void,
  setCurrentAttemptTimer: (value: number) => void,
  selectColor: (color: string) => void,
  startNewMatch: () => void,
  resetAllData: () => void
}
