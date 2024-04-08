let playerScore = 0;
let enemyScore = 0;
let tieScore = 0;


function getComputerChoice(){
  let randNum = Math.floor(Math.random() * 3);

  switch(randNum){
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
    return  'Scissors';
  }
}

function singleRound(playerSelection, computerSelection){
      if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        ++tieScore
        return `It's a tie ${lowered} is equal to ${computerSelection}`;
      }
      else if((playerSelection === 'rock' && computerSelection === 'Scissors') ||
             (playerSelection ===  'paper'  && computerSelection === 'Rock')  ||
             (playerSelection === 'scissors' && computerSelection === 'Paper')
            )
    { 
      ++playerScore
      return "YOU WIN! " + lowered + " beats " + computerSelection;
    }else{
      ++enemyScore
          return "YOU LOSE :(( " + computerSelection + " beats " + lowered;
        }    
      
  }
 function playGame(){
    for(let i = 0; i<5; i++){
    const playerSelection = prompt("Enter your choice bro! ");
    const computerSelection = getComputerChoice();

    console.log(singleRound(playerSelection, computerSelection));
    }

    if (enemyScore < playerScore) alert(`You win the round! You: ${playerScore}, Enemy: ${enemyScore}, Ties: ${tieScore}`);
    else if (playerScore < enemyScore) alert(`You lost the round! You: ${playerScore}, Enemy: ${enemyScore}, Ties: ${tieScore}`);
    else alert(`It's a tie You: ${playerScore}, Enemy: ${enemyScore}, Ties: ${tieScore}`);
 }

 playGame();
