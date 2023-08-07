//1 Exercise of condition

let age = prompt("Enter your age: ");

if (age >= 50) {
  console.log("old");
} else if (age < 50 && age >= 30) {
  console.log("Under 50 but abobe or ecual 30");
} else if (age < 30 && age >= 18) {
  console.log("Under 30 but abobe or ecual 18");
} else if (age < 18 && age > 0) {
  console.log("Under 18");
} else {
  console.log("Under 18");
}

//2 Exercise of condition
let n11 = prompt("First number: ");
let n22 = prompt("Secend number: ");
let n33 = prompt("Third number: ");

n11 = parseInt(n1);
n22 = parseInt(n2);
n33 = parseInt(n3);

if (n11 > n22) {
  if (n11 > n33) {
    console.log(n11 + " is largest number!");
  } else {
    console.log(n33 + " is largest number!");
  }
} else {
  if (n22 > n33) {
    console.log(n22 + " is largest number!");
  } else {
    console.log(n33 + " is largest number!");
  }
}

//3 Exercise of condition
let grate = prompt("What is your number");

if (grate <= 100 && grate >= 80) {
  console.log("Your grate : A+");
} else if (grate < 80 && grate >= 70) {
  console.log("Your grate : A");
} else if (grate < 70 && grate >= 60) {
  console.log("Your grate : A-");
} else if (grate < 60 && grate >= 50) {
  console.log("Your grate : B");
} else if (grate < 50 && grate >= 40) {
  console.log("Your grate : C");
} else if (grate < 40 && grate >= 33) {
  console.log("Your grate : D");
} else if (grate < 33 && grate >= 0) {
  console.log("Your grate : F");
} else {
  console.log("Your grate : Invalite input!");
}


//4 Exercise of condition
var light = "ok";
if (light == "green") {
  console.log("Drive")
} else if (light == "orange") {
  console.log("Get ready")
} else if (light == "red") {
  console.log("Don't drive")
} else {
  console.log("The car is not green, orange and red")
}

//5 Exercise of condition
var age2 = 10;

if (age >= 65) {
  console.log("You get your income from your pension.")
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary.")
} else if (age < 18 && age > 0) {
  console.log("You get an allowance.")
} else {
  console.log("The value of the age variable is not numerical.")
}

//1 Ternary oprator
let number1 = Number(prompt('Enter your number: '));
let result = number1 > 0 ? 'Positiv' : number1 < 0 ? 'Negativ' : 'Zer0';
console.log(result);

let n1 = Number(prompt('Enter your First number: '))
let n2 = Number(prompt('Enter your Second number: '))
let n3 = Number(prompt('Enter your Third number: '))

let result1 = n1 > n2 && n1 > n3 ? console.log(n1 + ' is big number') : n2 > n1 && n2 > n3 ? console.log(n2 + ' is big number') : console.log(n3 + ' is big number')

//1 Exercise of Switch
let a = "Option 1";
let b = "option 2";
let c = "option 3";

chose = prompt("Select an option: ");
let text;

switch (chose) {
  case "a":
    text = "Option 1 is selected";
    break;
  case "b":
    text = "Option 2 is selected";
    break;
  case "c":
    text = "Option 3 is selected";
    break;
  default:
    text = "No Option selected";
    break;
}
console.log(text);



//2 Exercise of Switch
var lighter = "red"
switch (lighter) {
  case 'green':
    console.log("Drive");
    break;
  case 'orange':
    console.log("Get ready");
    break;
  case 'red':
    console.log("Don't drive");
    break;
  default:
    console.log("The cor is not green, orange, or red");
}



//3 Exercise of Switch
var day = `Sunday`;
switch (day) {
  case `Sunday`:
    console.log(`Have barbecue.`);
    break;
  case `Monday`:
    console.log(`Read a book.`);
    break;
  case `Tuesday`:
    console.log(`Watch a movie.`);
    break;
  case `Wednesday`:
    console.log(`Read a book.`);
    break;
  case `Thursday`:
    console.log(`Play basketball.`);
    break;
  case `Friday`:
    console.log(`Socialize.`);
    break;
  case `Saturday`:
    console.log(`Chill.`);
    break;
  default:
    console.log(`There is no such day.`);
}