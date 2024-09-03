
humanScore = 0
computerScore = 0
roundCount = 0
const div = document.querySelector("div")
const computerScoreDiv = document.querySelector(".computerScore")
const humanScoreDiv = document.querySelector(".humanScore")

function getComputerChoice() {
    randomNumber = Math.random() * 3
    if (randomNumber > 2){
        return "rock"}
    if (randomNumber >= 1){
        return "paper"}
    return "scissors"
}
    

function getHumanChoice() {
   rock = document.createElement("button")
   rock.textContent = "Rock"
   rock.addEventListener("click", () =>{
    playRound("rock", getComputerChoice())
   })
   div.appendChild(rock)
   paper = document.createElement("button")
   paper.textContent = "Paper"
   paper.addEventListener("click", () =>{
    playRound("paper", getComputerChoice())
   })
   div.appendChild(paper)
  
   scissors = document.createElement("button")
   scissors.textContent = "Scissors"
   scissors.addEventListener("click", () =>{
    playRound("scissors", getComputerChoice())
   })
   div.appendChild(scissors)
}


function playRound(humanChoice, computerChoice) {
/*     console.log(humanChoice) */
    console.log("Computer chose " + computerChoice)
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            console.log("You lose!") 
        }
        if (computerChoice === "scissors") {
            humanScore++
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


getHumanChoice()