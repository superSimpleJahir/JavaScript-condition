// condition Exercises 1
let hour = 3;
let Name = 'Jahir';

if (hour >= 6 && hour <= 12) {
  console.log(`Good morning! ${Name}.`);
} else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon! ${Name}.`)
} else if (hour >= 18 && hour <= 23 || hour >= 0 && hour <= 5) {
  console.log(`Good night! ${Name}.`);
} else {
  console.log('Invalit input!');
}

// condition Exercises 2
let age = 6;
let isHoliday = false;
if ((age <= 6 || age >= 65) && isHoliday) {
  console.log(`Discount!`);
} else {
  console.log(`No discount!`);
}

// condition Exercises 3
let randomNumber = Math.random();
let result = ``;
if (randomNumber < 0.5) {
  result = `Heads`;
} else {
  result = `Tails`;
}

// condition Exercises 3 short hand
let result1 = randomNumber < 0.5 ? `Heads` : `Tails`;
// condition Exercises 4
let guess = `Heads`;

if (result === `Heads`) {
  guess = `You win!`;
} else if (result === `Tails`) {
  guess = `You lose!`;
}

// condition Exercises 4 short hand
let guess1 = (result === guess) ? `You win!` : `You lose!`;

console.log(guess1);


