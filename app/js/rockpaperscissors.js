////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
/*'use strict';*/

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
        winner = 'player';
    } else {
        winner = 'computer';
    }
    return winner;
}
    
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        var result;
        if (winner === 'player') {
            result = "won!";
            playerWins ++;
            console.log("You " + result + " You played " + playerMove + " against the opponent's " + computerMove + ". The score is " + playerWins + " wins for you and " + computerWins + " wins for your opponent.");
        } else if (winner === 'computer') {
            result = "lost.";
            computerWins ++;
            console.log("You " + result + " You played " + playerMove + " against the opponent's " + computerMove + ". The score is " + playerWins + " wins for you and " + computerWins + " wins for your opponent.");
        } else {
            result = "drew.";
            console.log("You " + result + " You played " + playerMove + " against the opponent's " + computerMove + ". The score is " + playerWins + " wins for you and " + computerWins + " wins for your opponent.");
        }
    }
}