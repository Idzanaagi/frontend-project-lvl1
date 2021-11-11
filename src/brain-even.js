import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * 10);

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return (`${userAnswer} is incorrect value.\nLet's try again, ${userName}! `);
    }

    if (number % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    }
    if (number % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    }
    if (number % 2 === 0 && userAnswer === 'no') {
      return (`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    }
    if (number % 2 !== 0 && userAnswer === 'yes') {
      return (`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
  return (`Congratulation, ${userName}!`);
};

export default gameEven;
