import {Match, Move} from "@/App/utils/types";
import {GameDifficulty, StorageKey} from "@/App/utils/enums";

const emptyMatch: Match = {id: '', player: '', currentScore: 0, currentMatchMoves: [] as Move[]}

export const getHighScoreFromStorage = () :number => {
  const retrievedData= typeof window !== "undefined" ? window.localStorage.getItem(StorageKey.HighScore) : false;
  return retrievedData ? +retrievedData: 0;
}

export const getLastMatchFromStorage = (): Match => {
  const retrievedData = typeof window !== "undefined" ? window.localStorage.getItem(StorageKey.LastPlayedMatch) : false;
  return retrievedData ? JSON.parse(retrievedData) : emptyMatch;
}

export const getLeaderboardFromStorage = (): Array<Match> => {
  const retrievedData = typeof window !== "undefined" ? window.localStorage.getItem(StorageKey.Leaderboard) : false;
  return (retrievedData ? JSON.parse(retrievedData) : []) as Array<Match>;
}

export const setLeaderboardToStorage = (match: Match) => {
  const fromRecord = getLeaderboardFromStorage();
  let updated: Match[] = fromRecord.length === 0 ? [match]: [match, ...fromRecord];
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.Leaderboard, JSON.stringify(updated)) : false;
}

export const setLastMatchToStorage = (match: Match) => {
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.LastPlayedMatch, JSON.stringify(match)) : false;
}

export const setHighScoreToStorage = (score: number) => {
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.HighScore, String(score)) : false;
}

export const resetAllData = () => {
  typeof window !== "undefined" ? window.localStorage.removeItem(StorageKey.Leaderboard) : false;
  typeof window !== "undefined" ? window.localStorage.removeItem(StorageKey.LastPlayedMatch) : false;
  typeof window !== "undefined" ? window.localStorage.removeItem(StorageKey.HighScore) : false;
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.Leaderboard, "[]") : false;
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.LastPlayedMatch, JSON.stringify(emptyMatch)) : false;
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.HighScore, "0") : false;
}

export const setFirstAccess = () => {
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.FirstAccess, '1') : false;
}

export const getFirstAccess = () :number => {
  const retrievedData= typeof window !== "undefined" ? window.localStorage.getItem(StorageKey.FirstAccess) : false;
  return retrievedData ? +retrievedData: 0;
}

export const setGameDifficulty = (difficulty: GameDifficulty) => {
  typeof window !== "undefined" ? window.localStorage.setItem(StorageKey.Difficulty, String(difficulty)) : false;
}

export const getGameDifficulty = () :number => {
  const retrievedData= typeof window !== "undefined" ? window.localStorage.getItem(StorageKey.Difficulty) : false;
  return retrievedData ? +retrievedData : 0;
}

