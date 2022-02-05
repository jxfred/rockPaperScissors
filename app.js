const roughPlayerScore = document.getElementById("playerScore")
const roughComputerScore = document.getElementById("computerScore")
const divResults = document.getElementById("results")
const roughGameStatus = document.getElementById("gameOver")

function computerPlay()
{
    let random = Math.floor(Math.random() * 3)

    if (random  === 0) return "Rock"
    else if (random === 1) return "Paper"
    else return "Scissors"
}


function playRound(inputSelection = "Rock")
{
    let inputString = inputSelection.toUpperCase()
    let computerSelection = computerPlay()
    let results = ""
            
    let playerScore = parseInt(roughPlayerScore.innerText.toString())
    let computerScore = parseInt(roughComputerScore.innerText.toString())
    
    //if score greater than 4 then reset.
    if (playerScore > 4 || computerScore > 4) 
    {
        playerScore = 0
        computerScore = 0
    }

    //reset the results text
    divResults.innerText = ""
    roughGameStatus.innerText = ""

    if (inputString !== "ROCK" && inputString !== "PAPER" && inputString !== "SCISSORS") return "Invalid Input"

    let upperPlayerSelection = inputString

    if (upperPlayerSelection ===  "ROCK")
    {
        if (computerSelection === "Paper") 
        {
            results = "Computer gets a point! Paper beats Rock."
            computerScore++
        }
        else if (computerSelection === "Scissors") 
        {
            results = "You get a point! Rock beats Scissors."
            playerScore++
        }
        else 
        {
            results = "Tie!"
        }
    }
    else if (upperPlayerSelection === "PAPER")
    {
        if (computerSelection === "Paper") 
        {    
            results = "Tie!"
        }
        else if (computerSelection === "Scissors") 
        {
            results = "Computer gets a point! Scissors beat Paper."
            computerScore++
        }
        else 
        {
            results = "You get a point! Paper beats Rock."
            playerScore++
        }
    }
    else
    {
        //player = Scissors
        if (computerSelection === "Paper") 
        {
            results = "You get a point! Scissors beat Paper." 
            playerScore++
        }
        else if (computerSelection === "Scissors") 
        {    
            results = "Tie!"
        }
        else 
        {
            results = "Computer gets a point! Rock beat Scissors."
            computerScore++
        }
    }


    divResults.innerHTML = results;

    if (playerScore === 5)
    {
        roughGameStatus.innerText = "You Win! To play again, choose an option"
    }
    else if (computerScore === 5)
    {
        roughGameStatus.innerText = "You Lose! To play again, choose an option."
    }

    roughComputerScore.innerText = computerScore.toString()
    roughPlayerScore.innerText = playerScore.toString()
}

///Automatic 4 rounds.
function playGame(inputNumber = 5)
{
    for (let i = 0; i < inputNumber; i++)
    {
        console.log(play())
    }
}