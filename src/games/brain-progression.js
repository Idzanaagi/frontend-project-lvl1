import generateRandomNum from '../generaterandomnum.js';
import { roundCount } from '../index.js';

const getProgression = () => {
  const startProgression = generateRandomNum(1, 100);
  const stepProgression = generateRandomNum(1, 10);
  const lengthProgression = 7;
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startProgression + stepProgression * i);
  }
  return progression;
};

const rules = 'What number is missing in the progression?';

const progressionGame = () => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const progression = getProgression();
    const randomIndex = generateRandomNum(1, 6);
    const gameData = progression[randomIndex];
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    questionAndCorrectAnswer.push([question, String(gameData)]);
  }
  return questionAndCorrectAnswer;
};

export { rules, progressionGame };
