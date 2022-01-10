/* eslint-disable no-param-reassign */
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

const randomIndex = generateRandomNum(1, 6);

const addingHiddenSymbol = (arrOfProgression = getProgression(), index = randomIndex) => {
  const gameData = arrOfProgression[index];
  arrOfProgression[index] = '..';
  const question = arrOfProgression.join(' ');
  return [question, gameData];
};

const progressionGame = () => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question = addingHiddenSymbol();
    questionAndCorrectAnswer.push([question[0], String(question[1])]);
  }
  return questionAndCorrectAnswer;
};

export { rules, progressionGame };
