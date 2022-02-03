function computerPlay()
{
    let random = Math.floor(Math.random() * 3)

    if (random  === 0) return "Rock"
    else if (random === 1) return "Paper"
    else return "Scissors"
}

function play(computerSelection = computerPlay())
{
    let inputString = prompt("Rock, Paper or Scissors? ").toUpperCase()
    
    if (inputString !== "ROCK" && inputString !== "PAPER" && inputString !== "SCISSORS") return "Invalid Input"

    let upperPlayerSelection = inputString

    if (upperPlayerSelection ===  "ROCK")
    {
        if (computerSelection === "Paper") return "You Lose! Paper beats Rock."
        else if (computerSelection === "Scissors") return "You Win! Rock beats Scissors."
        else return "Tie!"
    }
    else if (upperPlayerSelection === "PAPER")
    {
        if (computerSelection === "Paper") return "Tie!"
        else if (computerSelection === "Scissors") return "You Lose! Scissors beat Paper."
        else return "You Win! Paper beats Rock."
    }
    else
    {
        //player = Scissors
        if (computerSelection === "Paper") return "You Win! Scissors beat Paper."
        else if (computerSelection === "Scissors") return "Tie!"
        else return "You Lose! Rock beat Scissors."
    }
}

function playGame(inputNumber = 5)
{
    for (let i = 0; i < inputNumber; i++)
    {
        console.log(play())
    }
}