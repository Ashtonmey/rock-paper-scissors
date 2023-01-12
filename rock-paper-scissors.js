
const buttons = document.querySelectorAll("button");
let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
let games = 0;


buttons.forEach((button) => {

    button.addEventListener('click', function(e) {                
                playerSelection = this.id.toString();
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
    });

});



function getComputerChoice() 
{
    const num = Math.floor((Math.random()*9/3)+1);    
    switch(num){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
        default:
            return "false";
    }
}

function playRound(playerSelection,computerSelection)
{
    games++;
    console.log(games);
    const div = document.querySelector('div');
    const content = document.createElement('div');

        if (games <= 5)
        {            
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            
            if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock"))
            {
                
                content.textContent = (`You win! Player choice ${playerSelection} beats ${computerSelection}`);
                div.appendChild(content);
                playerScore++;                
            } else if (playerSelection == computerSelection)
            {
                content.textContent = (`It's a draw! You both chose ${playerSelection}`)
                div.appendChild(content);
                            }
            else
            {
                content.textContent = (`You lose! Computer choice ${computerSelection} beats ${playerSelection}`);
                div.appendChild(content);
                computerScore ++;
            }

        } 
        
        if (games == 5)
        {
                      
            /*if (playerScore > computerScore)
            {
                content.textContent = `Game Over! Human wins! Player Score: ${playerScore}. Computer score: ${computerScore}`
            } else if (computerScore > playerScore) 
            {
                content.textContent = `Game Over! AI wins! Player Score: ${playerScore} Computer score: ${computerScore}`
            } else
            {
                content.textContent = `Game Over! That's boring. It's a draw... Player Score: ${playerScore} Computer score: ${computerScore}`
            }
                        
            div.appendChild(content);*/
            endGame(playerScore, computerScore);
            return;
        } 

        console.log("this shouldn't show")
}

/*
function game()
{
    let playerScore = 0;
    let computerScore = 0;

        let computerSelection = getComputerChoice();

        let outcome = playRound(playerSelection, computerSelection);
        
        if (outcome == "win")
        {
            playerScore++;
        } else if (outcome == "lose")
        {
            computerScore++; 
        }
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
           
    return;
}
*/

function endGame(playerScore, computerScore)
{

    const div = document.querySelector('div');
    const content = document.createElement('div');

    if (playerScore > computerScore)
    {
        content.textContent = `Game Over! Human wins! Player Score: ${playerScore}. Computer score: ${computerScore}`;
    } else if (computerScore > playerScore) 
    {
        content.textContent = `Game Over! AI wins! Player Score: ${playerScore} Computer score: ${computerScore}`;
    } else
    {
        content.textContent = `Game Over! That's boring. It's a draw... Player Score: ${playerScore} Computer score: ${computerScore}`;
    }

    div.appendChild(content);
    
    buttons.forEach((button) => {

        button.removeEventListener('click', function(e) {
                    console.log(this.id);
        });
    
    });
    
}
