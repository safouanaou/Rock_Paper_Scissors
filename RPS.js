const choices = ['rock', 'paper', 'scissors']

// create function to return computer choice

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

