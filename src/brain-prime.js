import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const b = getRandomNumber();
    console.log(`Question: ${b}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (isPrime(b) === true && userAnswer === 'no') {
      return (`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
    }
    if (isPrime(b) === false && userAnswer === 'yes') {
      return (`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
    }
    if (isPrime(b) === true && userAnswer === 'yes') {
      console.log('Correct!');
    }
    if (isPrime(b) === false && userAnswer === 'no') {
      console.log('Correct!');
    }
  }
  return (`Congratulation, ${userName}!`);
};

export default brainPrime;
