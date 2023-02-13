const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');

let userChoice;
let computerChoice;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    generateComputerChoice();
    userChoice = e.target.id;
    UserChoiceDisplay.innerHTML = userChoice;
    
    resultdelaration();
}))

function resultdelaration(){
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            result.innerHTML = 'YOU LOST';
        }
        else if(computerChoice==='rock'){
            result.innerHTML = 'DRAW';
        }
        else{
            result.innerHTML = 'YOU WON';
        }
    }
    if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            result.innerHTML = 'YOU LOST';
        }
        else if(computerChoice==='paper'){
            result.innerHTML = 'DRAW';
        }
        else{
            result.innerHTML = 'YOU WON';
        }
    }
    if(userChoice==='scissors'){
        if(computerChoice==='rock'){
            result.innerHTML = 'YOU LOST';
        }
        else if(computerChoice==='scissor'){
            result.innerHTML = 'DRAW';
        }
        else{
            result.innerHTML = 'YOU WON';
        }
    }
}

function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber==1){
        computerChoice='rock';
    }
    else if(randomNumber==2){
        computerChoice='paper';
    }
    else if(randomNumber==3){
        computerChoice='scissors';
    }

    ComputerChoiceDisplay.innerHTML = computerChoice;

}