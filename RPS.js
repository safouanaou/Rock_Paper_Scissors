let compscore = 0;
let palyerscore = 0;


// create function to return computer choice

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*choices.length)]
}


// create function that plays single round of RPS and returns a winner

function rpsRound(playerSelection, computerSelection){
    // paper
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        compscore++
        return 'you lose! paper beats rock'
    }
    else if(playerSelection == 'paper' && computerSelection == 'paper'){
        return 'it is a draw'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        palyerscore++
        return 'you win! scissors beat paper'
    }
    // rock
    else if(playerSelection == 'rock' && computerSelection == 'rock'){
        return 'it is a draw'
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        palyerscore++
        return 'you win! paper beats rock'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        compscore++
        return 'you lose! rock beats scissors'
    }
    // scissors
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        palyerscore++
        return 'you win! rock beats scissors'
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        compscore++
        return 'you lose! scissors beat paper'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'it is a draw'
    }
    
}



function game(){
    for (let i = 0; i < 5; i ++){
    const playerSelection = prompt('choose here').toLowerCase();
        const computerSelection = getComputerChoice();
        rpsRound(playerSelection, computerSelection);
    }
    if(palyerscore > compscore){
        return 'you won! good job'
    } else if(palyerscore < compscore){
        return 'you lost! better luck next time'
    } else{
        return 'it is a tie'
    }
    
}
console.log(game())
