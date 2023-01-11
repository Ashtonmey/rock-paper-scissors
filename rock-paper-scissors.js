
const buttons = document.querySelectorAll("button");
let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
let games = 0;


buttons.forEach((button) => {

    button.addEventListener('click', function(e) {
                console.log(this.id);
                playerSelection = this.id.toString();
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
    });

});



function getComputerChoice() 
{
    const num = Math.floor((Math.random()*9/3)+1);
    console.log("Computer choice: " + num);
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
                return "win";
            } else if (playerSelection == computerSelection)
            {
                content.textContent = (`It's a draw! You both chose ${playerSelection}`)
                div.appendChild(content);
                return "draw";
            }
            else
            {
                content.textContent = (`You lose! Computer choice ${computerSelection} beats ${playerSelection}`);
                div.appendChild(content);
                computerScore ++;
                return "lose";
            }

        } else if (games == 6)
        {
            
            if (playerScore > computerScore)
            {
                content.textContent = `Game Over!<br>Human wins!<br>Player Score: ${playerScore}<br>Computer score: ${computerScore}`
            } else if (computerScore > playerScore) 
            {
                content.textContent = `Game Over!<br>AI wins!<br>Player Score: ${playerScore}<br>Computer score: ${computerScore}`
            } else
            {
                content.textContent = `Game Over!<br>That's boring. It's a draw...<br>Player Score: ${playerScore}<br>Computer score: ${computerScore}`
            }
                        
            div.appendChild(content);
            return;
        } else
        {
            return;
        }

}

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
    
    
    if (playerScore > computerScore)
    {
        console.log ("Human wins!");
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (computerScore > playerScore) 
    {
        console.log ("\"AI\" wins!");
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else
    {
        console.log("That's boring. It's a draw :(");
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    return;
}

