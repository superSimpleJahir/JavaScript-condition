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

let Age = prompt('What is your age: ');
if (Age >= 10 && Age <= 20) {
  console.log('Your age lies between 10 and 20');
} else {
  console.log('Your age dosenot lies between 10 and 20');
}


switch (Age) {
  case '11':
    console.log('Your age 11');
    break;
  case '12':
    console.log('Your age 12');
    break;
  case '13':
    console.log('Your age 13');
    break;
  case '14':
    console.log('Your age 14');
    break;
  case '15':
    console.log('Your age 15');
    break;
  case '16':
    console.log('Your age 16');
    break;
  case '17':
    console.log('Your age 17');
    break;
  case '18':
    console.log('Your age 18');
    break;
  case '19':
    console.log('Your age 19');
    break;
  case '20':
    console.log('Your age 20');
    break;
  default:
    console.log('Your age not special');
}

let number = prompt('What is your number: ');
number = Number.parseInt(number);
if (number % 2 == 0 && number % 3 == 0) {
  console.log('Your number is divisible by 2 and 3');
} else {
  console.log('Your number is not divisible by 2 and 3');
}


let number1 = prompt('What is your number: ');
number1 = Number.parseInt(number1);
if (number1 % 2 == 0 || number1 % 3 == 0) {
  console.log('Your number is divisible by 2 and 3');
} else {
  console.log('Your number is not divisible by 2 and 3');
}

let a = Age > 18 ? 'You can drive.' : 'You cannot drive.'
console.log(a);