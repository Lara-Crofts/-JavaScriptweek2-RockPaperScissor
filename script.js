// WRITE OUT VARIABLES, create variables // 
// default to 0 at the moment, default count 0 
let human_score = 0;
let computer_score = 0; 

// select ALL hand select images to create variables 
const handItems = document.querySelectorAll('.main-items img');
const userScore = document.querySelector('.human_score');
const computerScore = document.querySelector('.computer_score');
const mainMessage = document.querySelector('.main_message');

// create an array with 3 values .. my () paramaters are as follows...
// create a random computer choice... math.floor means ...
// .length means going through each array index.. by random 
const getComputerChoice = () => {
    const handItems = ["rock", "paper", "scissors"]; 
    const computerChoice = handItems[Math.floor(Math.random() * handItems.length)];
    return computerChoice;
}

//display message & update
const displayMessageAndUpdate = (e, condition, computerChoice) => {
    switch (condition) {
      case "draw":
        mainMessage.textContent = `Draw! Both players selected ${e.target.id}.`;
        break;
      case "win":
        mainMessage.textContent = `You win! ${e.target.id} beats ${computerChoice}.`;
        human_score++;
        userScore.textContent = human_score;
        break;
      case "lose":
        mainMessage.textContent = `You lose! ${computerChoice} beats ${e.target.id}.`;
        computer_score++;
        computerScore.textContent = computer_score;
        break;
    }
  }


  // select CHOICE ... /e/ is parameter .. 
  const play = e => {

// get computer choice & user chocice 
// const userChoice = e.target.id;

    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    

    // using a OUTCOMES object to map possible outcome for USER and
    // COMPUTER choices . was using conditionals statements 
    const outcomes = {
      rock: { rock: 'draw', paper: 'lose', scissors: 'win' },
      paper: { rock: 'win', paper: 'draw', scissors: 'lose' },
      scissors: { rock: 'lose', paper: 'win', scissors: 'draw' },
    };

    //output of choices placed into userchoice and computerchoice 
    // and then disaplys e (event), comp. choice & result to displayMessage
  
    const result = outcomes[userChoice][computerChoice];
    displayMessageAndUpdate(e, result, computerChoice);
  };
  
  // play game 
  handItems.forEach(e => {
    e.addEventListener('click', play);
  });
  
  // display scores 
  window.addEventListener('load', function() {
    userScore.textContent = human_score;
    computerScore.textContent = computer_score;
  });
  
