import generateRandomNum from '../generaterandomnum.js';

const rules = 'Answer "yes" if number is even. Or answer "no"';

const isEvenGame = (roundCount) => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const randomNum = generateRandomNum(1, 100);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    questionAndCorrectAnswer.push([randomNum, correctAnswer]);
  }
  return questionAndCorrectAnswer;
};

export { rules, isEvenGame };
