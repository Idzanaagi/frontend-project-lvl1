import generateRandomNum from './generaterandomnum.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = (roundCount) => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const randomNum = generateRandomNum(1, 100);
    const correctAnswer = isPrime(randomNum) === true ? 'yes' : 'no';
    questionAndCorrectAnswer.push([randomNum, correctAnswer]);
  }
  return questionAndCorrectAnswer;
};

export { rules, primeGame };
