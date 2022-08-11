// create function to return computer choice

function getComputerChoice(){
    let computerChoice = ['rock', 'paper', 'scissors']
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}

console.log(getComputerChoice())



// create function that plays single round of RPS and returns a winner



