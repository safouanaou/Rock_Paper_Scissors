 // // create function to return computer choice
 function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*choices.length)]
}

// game start
function game(){

    // declaring variables
    let compscore = 0;
    let playerscore = 0;
    let gamewinner = '';
    game


     //  Add event listeners for all three buttons/run round on click/track and end game
    const buttons = document.querySelectorAll('button');
   
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            playerSelection = button.className;
            const computerSelection = getComputerChoice();
            rpsround(playerSelection, computerSelection);
            playerWinText.textContent = 'player:  ' + playerscore;
            computerWinText.textContent = 'computer:  ' + compscore;
            // redeclared these vars below because here they are local vars
            endGame();
        })
    })

    // // create function that plays single round of rPS and returns a winner
    function rpsround(playerSelection, computerSelection){
        // paper
        if (playerSelection == 'rock' && computerSelection == 'paper'){
            compscore++
            return compscore
        }
        else if(playerSelection == 'paper' && computerSelection == 'paper'){
            return;
        }
        else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            palyerscore++
            return playerscore
        }
   //     // rock
        else if(playerSelection == 'rock' && computerSelection == 'rock'){
            return
        }
        else if(playerSelection == 'paper' && computerSelection == 'rock'){
            playerscore++
            return playerscore
        }
        else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            compscore++
            return compscore
        }
   //     // scissors
        else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            playerscore++
            return palyerscore
        }
        else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            compscore++
            return compscore
        }
        else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
            return 
        }
       
    }



    // create div DOM for all results
    const container = document.querySelector('.container');
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'results'
    resultsDiv.style.marginTop = '20px';
    container.appendChild(resultsDiv);

    // create player win tracking dom
    const playerWinText = document.createElement('p');
    playerWinText.className = 'player'
    playerWinText.textContent = 'player:  ' + playerscore;
    resultsDiv.appendChild(playerWinText);

    // create computer win tracking dom
    const computerWinText = document.createElement('p');
    computerWinText.className = 'computer'
    computerWinText.textContent = 'computer:  ' + compscore;
    resultsDiv.appendChild(computerWinText);


    //  create game win text DOM
    const gameWinText = document.createElement('p');
    gameWinText.className = 'winner'
    gameWinText.textContent = gamewinner;
    resultsDiv.appendChild(gameWinText);


    //  determine who won to five points first
    function endGame(){
        if(playerscore == 5){
            gamewinner = 'YOU WIN!';
            gameWinText.textContent = gamewinner;

      //  disable game buttons
      document.getElementById('1').disabled = true;
      document.getElementById('2').disabled = true;
      document.getElementById('3').disabled = true;

    //  create new DOM button to replay
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again!';
    resultsDiv.appendChild(playAgainButton);
    playAgainButton.className = 'playagain';

     //  if clicked, reload page
    playAgainButton.addEventListener('click', ()=>{
        location.reload();
    })
        }else if (compscore == 5){
            gamewinner = 'COMPUTER WINS!';
            gameWinText.textContent = gamewinner;

    //  disable game buttons
    document.getElementById('1').disabled = true;
    document.getElementById('2').disabled = true;
    document.getElementById('3').disabled = true;

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again!';
    resultsDiv.appendChild(playAgainButton);
    playAgainButton.className = 'playagain';

    playAgainButton.addEventListener('click', ()=>{
        location.reload();
        })


    }
   
}



}
game();



