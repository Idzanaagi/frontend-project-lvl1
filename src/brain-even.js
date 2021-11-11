import readlineSync from 'readline-sync';

function gameEven() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  for (let i = 1; i <= 3; i += i) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (number % 2 === 0 && userAnswer === 'yes' || number % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    }
    if (number % 2 === 0 && userAnswer === 'no') {
      return (`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    }
    if (number % 2 !== 0 && userAnswer === 'yes') {
      return (`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
  console.log('Congratulation!');
}
console.log(gameEven());
