
game();

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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock"))
    {
        console.log(`You win! Player choice ${playerSelection} beats ${computerSelection}`);
        return "win";
    } else if (playerSelection == computerSelection)
    {
        console.log(`It's a draw! You both chose ${playerSelection}`)
        return "draw";
    }
    else
    {
        console.log(`You lose! Computer choice ${computerSelection} beats ${playerSelection}`);
        return "lose";
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i<=5; i++)
    {
        
        let playerSelection = prompt("Please type rock, paper or scissors: ");
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
    }
    
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
