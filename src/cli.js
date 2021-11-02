import readlineSync from 'readline-sync';

export const userGreeting = () => {
  const getUsername = readlineSync.question('May I have your name? ');
  return getUsername;
};
console.log('Welcome to the Brain Games!');
console.log(`Hello, ${userGreeting()}`);
