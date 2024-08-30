
humanScore = 0
computerScore = 0



function getComputerChoice() {
    randomNumber = Math.random() * 3
    if (randomNumber > 2){
        return "rock"}
    if (randomNumber >= 1){
        return "paper"}
    return "scissors"
}


function getHumanChoice() {
    return prompt("Choose your destiny").toLowerCase()
}


function playRound(humanChoice, computerChoice) {
  console.log(humanChoice)
  console.log(computerChoice)  
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            humanScore++
            console.log("You lose!") 
        }
        if (computerChoice === "scissors") {
            computerScore++
            console.log("You win!")
        }
        if (computerChoice === "rock"){
            console.log("Draw") 
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "paper"){
            console.log("Draw") 
        }
        if (computerChoice === "rock"){
            humanScore++
            console.log("You win!") 
    }
        if (computerChoice === "scissors"){
            computerScore++
            console.log("You lose") 
        }
    }
    if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore++
            console.log("You lose")
        }
        if (computerChoice === "paper"){
            humanScore++
            console.log("You win")
        }
        if (computerChoice === "scissors"){
            console.log("Draw") 
        }
    
    }
    }
    







playRound(getHumanChoice(), getComputerChoice())




/* 

console.log(getHumanChoice())

 */