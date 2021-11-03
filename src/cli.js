import readlineSync from 'readline-sync';

export default function userGreeting() {
  console.log('Welcome to the Brain Games!');
  const getUsername = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUsername()}`);
}
