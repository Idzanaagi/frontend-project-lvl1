import generateRandomNum from '../generaterandomnum.js';
import { getEngine, roundsCount } from '../index.js';

const progressionLength = 7;

const getProgression = (start = generateRandomNum(1, 100), step = generateRandomNum(1, 10)) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const gameRules = 'What number is missing in the progression?';

const getHideSymbol = (arrOfProgression, index) => {
  const progressionCopy = arrOfProgression.slice();
  progressionCopy[index] = '..';
  const question = progressionCopy.join(' ');
  return question;
};

const generateOneRound = () => {
  const index = generateRandomNum(0, progressionLength - 1);
  const progression = getProgression();
  const answer = progression[index];
  const question = getHideSymbol(progression, index);
  return [question, answer.toString()];
};

const progressionGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  getEngine(gameRules, gameData);
};

export default progressionGame;
