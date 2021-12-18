import generateRandomNum from '../generaterandomnum.js';
import { roundCount } from '../index.js';

const rules = 'Answer "yes" if number is even. Or answer "no"';

const isEvenGame = () => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const randomNum = generateRandomNum(1, 100);
    const gameData = randomNum % 2 === 0 ? 'yes' : 'no';
    questionAndCorrectAnswer.push([randomNum, gameData]);
  }
  return questionAndCorrectAnswer;
};

export { rules, isEvenGame };
