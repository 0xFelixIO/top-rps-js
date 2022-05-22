function computerPlay() {
    let val = Math.floor(Math.random() * 3);
    if (val == 1)
        return 'rock';
    else if (val == 2)
        return 'paper';
    else 
        return 'scissors';
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') 
            return 'player';
        else if (computerSelection == 'paper')
            return 'computer'
        else
            return 'tie'
    }

    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') 
            return 'player';
        else if (computerSelection == 'rock')
            return 'computer'
        else
            return 'tie'
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') 
            return 'player';
        else if (computerSelection == 'rock')
            return 'computer'
        else
            return 'tie'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner;
    let playerResponse;
    let computerResponse;

    for (let i = 0; i < 5; i++) {
        playerResponse = (prompt("What move will you make, Rock, Paper, or Scissors!???").toLowerCase());
        console.log("PLAYER RESPONSE: " + playerResponse);

        computerResponse = computerPlay();
        console.log("COMPUTER RESPONSE: " + computerResponse);
        
        roundWinner = playRound(playerResponse, computerResponse);
        console.log(roundWinner);
        
        if (roundWinner == 'computer')
            computerScore++;
        else if (roundWinner == 'player')
            playerScore++
    }

    console.log("pc: " + computerScore + " player: " + playerScore);
}