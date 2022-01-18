import generateRandomNum from '../generaterandomnum.js';
import { roundsCount } from '../index.js';

const getProgression = () => {
  const progression = [];
  const startProgression = generateRandomNum(1, 100);
  const stepProgression = generateRandomNum(1, 10);
  const lengthProgression = 7;
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startProgression + stepProgression * i);
  }
  return progression;
};

const rules = 'What number is missing in the progression?';

const addingHiddenSymbol = (arrOfProgression, index) => {
  // eslint-disable-next-line no-param-reassign
  arrOfProgression[index] = '..';
  const question = arrOfProgression.join(' ');
  return question;
};

const generateOneRound = () => {
  const index = generateRandomNum(1, 6);
  const progression = getProgression();
  const answer = progression[index];
  const question = addingHiddenSymbol(progression, index);
  return [question, answer.toString()];
};

const progressionGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  return gameData;
};

export { rules, progressionGame };
