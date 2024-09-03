
humanScore = 0
computerScore = 0
roundCount = 0
const div = document.querySelector(".buttonDiv")
const computerScoreDiv = document.querySelector(".computerScore")
const humanScoreDiv = document.querySelector(".humanScore")
const announcerDiv = document.querySelector(".announcerDiv")
computerScoreDiv.innerText = ("Computer: " + computerScore)
humanScoreDiv.innerText = ("You: " + humanScore)

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
    scoreUpdate()
   })
   div.appendChild(rock)
   paper = document.createElement("button")
   paper.textContent = "Paper"
   paper.addEventListener("click", () =>{
    playRound("paper", getComputerChoice())
    scoreUpdate()
   })
   div.appendChild(paper)
  
   scissors = document.createElement("button")
   scissors.textContent = "Scissors"
   scissors.addEventListener("click", () =>{
    playRound("scissors", getComputerChoice())
    
    scoreUpdate()
   })
   div.appendChild(scissors)

   }
  
   



function playRound(humanChoice, computerChoice) {
/*     console.log(humanChoice) */
    
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            gameOutcome = ("You lose!") 
        }
        if (computerChoice === "scissors") {
            humanScore++
            gameOutcome = ("You win!")
        }
        if (computerChoice === "rock"){
            gameOutcome = ("Draw") 
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "paper"){
            gameOutcome = ("Draw") 
        }
        if (computerChoice === "rock"){
            humanScore++
            gameOutcome = ("You win!") 
    }
        if (computerChoice === "scissors"){
            computerScore++
            gameOutcome = ("You lose") 
        }
    }
    if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore++
            gameOutcome = ("You lose")
        }
        if (computerChoice === "paper"){
            humanScore++
            gameOutcome = ("You win")
        }
        if (computerChoice === "scissors"){
            gameOutcome = ("Draw") 
        }
    
    }
    }
function scoreUpdate(){
    computerScoreDiv.innerText = ("Computer: " + computerScore)
    humanScoreDiv.innerText = ("You: " + humanScore)
    announcerDiv.textContent = gameOutcome
    if (humanScore === 5) {
        computerScore = 0
        humanScore = 0
        announcerDiv.textContent = "You won!!!"
       }
       if (computerScore === 5){
        computerScore = 0
        humanScore = 0
        announcerDiv.textContent = "You lost..."}
}



getHumanChoice()