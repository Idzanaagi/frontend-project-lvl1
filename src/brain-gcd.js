import readlineSync from 'readline-sync';

const gcdGame = () => {
  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  function gcd(a, b) {
    if (b === 0) {
      return Math.abs(a);
    }
    return gcd(b, a % b);
  }
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const res = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (res !== Number(userAnswer)) {
      return (`${userAnswer} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${userName}`);
    }
    if (res === Number(userAnswer)) {
      console.log('Correct!');
    }
  }
  return (`Congratulation, ${userName}!`);
};
export default gcdGame;
