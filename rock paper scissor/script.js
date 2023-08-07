function rockPaperScissors1() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  console.log(computerMove);

  let result = '';

  if (computerMove === 'rock') {
    result = 'Tie';
  } else if (computerMove === 'paper') {
    result = 'You lose';
  } else if (computerMove === 'scissors') {
    result = 'you win';
  }

  alert(`You pic rock. Computer picked ${computerMove}. ${result}`)
}


function rockPaperScissors2() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'You win';
  } else if (computerMove === 'paper') {
    result = 'Tie';
  } else if (computerMove === 'scissors') {
    result = 'You lose';
  }

  alert(`You pic paper. Computer picked ${computerMove}. ${result}`);
}

function rockPaperScissors3() {
  const randomNumber = Math.random();

  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'You lose';
  } else if (computerMove === 'paper') {
    result = 'You win';
  } else if (computerMove === 'scissors') {
    result = 'Tie';
  }
  alert(`You pic paper. Computer picked ${computerMove}. ${result}`);
}