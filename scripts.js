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
            return 'computer';
        else if (computerSelection == 'rock')
            return 'player'
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

function playGame(e) {
    let computerSelection = computerPlay();
    let playerSelection = this.textContent;
    let resultsTab = document.getElementsByClassName('resultsTab')[0];
    resultsTab.innerHTML = "Player Choice: " + playerSelection + "<br />" + "Computer Choice: " + computerSelection;
    let result = playRound(playerSelection, computerSelection);
    
    if (result == 'player') {
        playerScore++;
    }
    else if (result == 'computer') {
        computerScore++;
    }

    if (playerScore == 5 || computerScore == 5) {
        let winner = '';
        if (playerScore == 5) {
            winner = 'Player';
        }
        else winner = 'Computer';

        resultsTab.innerHTML += "<br />GAME OVER - \nPlayer: " + playerScore + " - Computer: " + computerScore + "<br />" + winner + " WINS!";
        playerScore = 0;
        computerScore = 0;
        return;
    }

    resultsTab.innerHTML += "<br />Player Score: " + playerScore + " - Computer Score: " + computerScore;

}

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playGame));