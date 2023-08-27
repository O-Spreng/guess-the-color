import React, {createContext, useContext, useEffect, useState} from 'react';
import {GameDifficulty, GameStatus} from "@/core/utils/enums";
import {defaultProps, GameContextObject, Match, Move} from "@/core/utils/types";
import {generateRandomColor, shuffleArray} from "@/core/services";
import {
  getFirstAccess,
  getHighScoreFromStorage,
  getLastMatchFromStorage,
  resetAllData, setFirstAccess,
  setHighScoreToStorage,
  setLastMatchToStorage,
  setLeaderboardToStorage
} from "@/core/services/GameStorageProvider";


const GameContext = createContext<GameContextObject>({
  difficulty: GameDifficulty.Easy,
  highScore: 0,
  attempt: {} as Move,
  match: {} as Match,
  lastMatch: {} as Match,
  colors: [] as string[],
  correctColor: '',
  currentGameStatus: GameStatus.Stopped,
  showStartTimer: false,
  showPauseInterface: false,
  currentMatchTimer: 30,
  currentAttemptTimer: 10,
  setCurrentGameStatus: (status: GameStatus, origin: string) => {
  },
  setShowStartTimer: (show: boolean) => {
  },
  setShowPauseInterface: (show: boolean) => {
  },
  setCurrentMatchTimer: (value: number) => {
  },
  setCurrentAttemptTimer: (value: number) => {
  },
  selectColor: (color: string) => {
  },
  startNewMatch: () => {
  },
  resetAllData: () => {
  }
});

export const GameContextProvider: React.FC<defaultProps> = (props) => {
  let emptyAttempt: Move = {selectedColor: '', expectedColor: '', elapsedTime: 0};
  let emptyMatch: Match = {id: '', player: '', currentScore: 0, currentMatchMoves: [] as Move[]}
  const [currentGameStatus, setCurrentGameStatus] = useState<GameStatus>(GameStatus.Stopped);
  const [showStartTimer, setShowStartTimer] = useState<boolean>(false);
  const [showPauseInterface, setShowPauseInterface] = useState<boolean>(false);
  const [currMatchTimer, setCurrMatchTimer] = useState<number>(0);
  const [currAttemptTimer, setCurrAttemptTimer] = useState<number>(0);
  const [colors, setColors] = useState<string[]>(['#FFFFFF', '#FFFFFF', '#FFFFFF']);
  const [correctColor, setCorrectColor] = useState<string>('#FFFFFF');
  const [attempt, setAttempt] = useState<Move>(emptyAttempt);
  const [match, setMatch] = useState<Match>(emptyMatch);
  const [lastMatch, setLastMatch] = useState<Match>(emptyMatch);
  const [difficulty, setDifficulty] = useState<GameDifficulty>(GameDifficulty.Easy)
  const [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    if (getFirstAccess() === 0) {
      setFirstAccess();
      resetAllData();
    }
    setHighScore(getHighScoreFromStorage());
    setLastMatch(getLastMatchFromStorage());
  }, []);

  useEffect(() => {
    let matchInterval: any;
    let attemptInterval: any;

    if (currentGameStatus !== GameStatus.Paused && currentGameStatus === GameStatus.InGame) {
      matchInterval = setInterval(() => {
        setCurrMatchTimer(prevTimer => prevTimer - 1);
      }, 1000);

      attemptInterval = setInterval(() => {
        setCurrAttemptTimer(prevTimer => prevTimer > 0 ? prevTimer - 1 : 0);
      }, 1000);
    }

    if (currAttemptTimer === 0 &&  currentGameStatus === GameStatus.InGame) {
      let emptyAttempt: Move = {
        selectedColor: '=[',
        expectedColor: '#fb3737',
        elapsedTime: 10
      }
      let updatedScore = match.currentScore > 1 ? match.currentScore -= 2 : 0;
      setMatch({...match,currentScore:updatedScore, currentMatchMoves: [emptyAttempt, ...match.currentMatchMoves]});
      startNewAttempt();
    }

    if (currMatchTimer === 0 && currentGameStatus === GameStatus.InGame) {
      endCurrentMatch()
    }

    return () => {
      clearInterval(matchInterval);
      clearInterval(attemptInterval);
    }
  }, [currMatchTimer, currAttemptTimer, currentGameStatus, match, startNewAttempt, selectColor, highScore, resetAllData]);


  function handleStatusChange(status: GameStatus, origin: string) {
    if (currentGameStatus === GameStatus.Stopped && origin === 'start') {
      setShowStartTimer(true);
    }

    if (currentGameStatus === GameStatus.InGame && origin === 'pause') {
      setCurrentGameStatus(GameStatus.Paused);
      setShowPauseInterface(true);
    }

    if (currentGameStatus === GameStatus.Paused && origin === 'pause') {
      setShowPauseInterface(false)
      setCurrentGameStatus(GameStatus.InGame);
    }


    if (currentGameStatus === GameStatus.Paused && origin === 'restart' || currentGameStatus === GameStatus.InGame && origin === 'restart') {
      setShowPauseInterface(false);
      setCurrentGameStatus(GameStatus.Stopped);
      setShowStartTimer(true);
    }
  }

  function startNewAttempt() {
    setCurrAttemptTimer(10);
    let colorsQuantity = difficulty.valueOf();
    const generatedColors = Array.from({length: colorsQuantity}, () => generateRandomColor());
    setCorrectColor(generatedColors[0]);
    setColors(shuffleArray(generatedColors));
  }

  // function saveMatchToLeaderboard(username: string) {
  function saveMatchToLeaderboard() {
    //set showPlayerPrompt false
    let name = ''
    setHighScore(match.currentScore);
    setHighScoreToStorage(match.currentScore);
    setLeaderboardToStorage({...match, player:name});
  }

  function endCurrentMatch() {
    setCurrentGameStatus(GameStatus.Stopped);
    setLastMatch(match);
    setLastMatchToStorage(match);
    if (match.currentScore > highScore) {
      //set showPlayerPrompt true
      saveMatchToLeaderboard();
    }
  }

  function startNewMatch() {
    setCurrMatchTimer(30);
    const idGen = new Date();
    const id = idGen.getTime().toString(16);
    let newMatch: Match = {
      id: id,
      player: '',
      currentScore: 0,
      currentMatchMoves: [] as Move[],
    }
    setCurrentGameStatus(GameStatus.InGame);
    setMatch(prevState => newMatch);
    startNewAttempt();}

  function selectColor(color: string) {
    let currentAttempt: Move = {
      selectedColor: color,
      expectedColor: correctColor,
      elapsedTime: 10 - currAttemptTimer
    }
    let updatedMatch: Match = {...match};
    setAttempt(prevState => currentAttempt);
    if (color === correctColor) {
      updatedMatch.currentScore += 5;
      updatedMatch.currentMatchMoves.unshift(currentAttempt);
      setCurrMatchTimer(prevState => prevState + 1)
      setMatch(updatedMatch);
    }
    if (color !== correctColor) {
      setCurrMatchTimer(prevState => prevState - 1)
      updatedMatch.currentScore > 0 ? updatedMatch.currentScore -= 1 : updatedMatch.currentScore = 0;
      updatedMatch.currentMatchMoves.unshift(currentAttempt);
      setMatch(updatedMatch);
    }
    startNewAttempt();
  }


  const contextValue: GameContextObject = {
    difficulty: difficulty,
    highScore: highScore,
    attempt: attempt,
    match: match,
    lastMatch: lastMatch,
    colors: colors,
    correctColor: correctColor,
    currentGameStatus: currentGameStatus,
    showStartTimer: showStartTimer,
    showPauseInterface: showPauseInterface,
    currentMatchTimer: currMatchTimer,
    currentAttemptTimer: currAttemptTimer,
    setCurrentGameStatus: handleStatusChange,
    setShowStartTimer: setShowStartTimer,
    setShowPauseInterface: setShowPauseInterface,
    setCurrentMatchTimer: setCurrMatchTimer,
    setCurrentAttemptTimer: setCurrAttemptTimer,
    selectColor: selectColor,
    startNewMatch: startNewMatch,
    resetAllData: resetAllData
  }

  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  return useContext(GameContext)
}
