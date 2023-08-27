import {Match, Move} from "@/App/utils/types";
import {GameDifficulty, StorageKey} from "@/App/utils/enums";

const emptyMatch: Match = {id: '', player: '', currentScore: 0, currentMatchMoves: [] as Move[]}

export const getHighScoreFromStorage = () :number => {
  const retrievedData= localStorage?.getItem(StorageKey.HighScore);
  return retrievedData ? +retrievedData: 0;
}

export const getLastMatchFromStorage = (): Match => {
  const retrievedData = localStorage?.getItem(StorageKey.LastPlayedMatch);
  return retrievedData ? JSON.parse(retrievedData) : emptyMatch;
}

export const getLeaderboardFromStorage = (): Array<Match> => {
  const retrievedData = localStorage?.getItem(StorageKey.Leaderboard);
  return (retrievedData ? JSON.parse(retrievedData) : []) as Array<Match>;
}

export const setLeaderboardToStorage = (match: Match) => {
  const fromRecord = getLeaderboardFromStorage();
  let updated: Match[] = fromRecord.length === 0 ? [match]: [match, ...fromRecord];
  localStorage?.setItem(StorageKey.Leaderboard, JSON.stringify(updated));
}

export const setLastMatchToStorage = (match: Match) => {
  console.log('Saving LastMatch: ID = ', match.id);
  localStorage?.setItem(StorageKey.LastPlayedMatch, JSON.stringify(match));
}

export const setHighScoreToStorage = (score: number) => {
  localStorage?.setItem(StorageKey.HighScore, String(score));
}

export const resetAllData = () => {
  localStorage?.removeItem(StorageKey.Leaderboard);
  localStorage?.removeItem(StorageKey.LastPlayedMatch);
  localStorage?.removeItem(StorageKey.HighScore);
  localStorage?.setItem(StorageKey.Leaderboard, "[]");
  localStorage?.setItem(StorageKey.LastPlayedMatch, JSON.stringify(emptyMatch));
  localStorage?.setItem(StorageKey.HighScore, "0");
}

export const setFirstAccess = () => {
  localStorage?.setItem(StorageKey.FirstAccess, '1');
}

export const getFirstAccess = () :number => {
  const retrievedData= localStorage?.getItem(StorageKey.FirstAccess);
  return retrievedData ? +retrievedData: 0;
}

export const setGameDifficulty = (difficulty: GameDifficulty) => {
  localStorage?.setItem(StorageKey.Difficulty, String(difficulty));
}

export const getGameDifficulty = () :number => {
  const retrievedData= localStorage?.getItem(StorageKey.Difficulty);
  return retrievedData ? +retrievedData: 0;
}

