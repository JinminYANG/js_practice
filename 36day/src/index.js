const gameForm = document.querySelector("#game");
const rangeValue = gameForm.querySelector("#numberChange");
const inputValue = gameForm.querySelector("#inputNumber");
const gameStartClick = gameForm.querySelector(".click");
const resultContainer = gameForm.querySelector(".gameResult");

function setMaxValue(){
    inputValue.setAttribute("max", rangeValue.value);
}

function loadInputValue(){
    return inputValue.value;
}

function randomNumber(rangeValue){
    const number =  Math.floor(Math.random() * rangeValue) + 1;
    return number;
}

function buildGenericDiv(){
    const span = resultContainer.querySelector("span");
    const strong = resultContainer.querySelector("strong");
    const value = loadInputValue();
    const machineValue = randomNumber(rangeValue.value);
    span.innerText = `You chose: ${value}, the machine chose: ${machineValue}.`;

    if(value == machineValue){
        strong.innerText = "You won!";
    }else{
        strong.innerText = "You lose!";
    }
}

function gameResultPrint(event){
    event.preventDefault();
    setMaxValue();
    buildGenericDiv();
}


function init(){
    gameStartClick.addEventListener("click", gameResultPrint);
}

init();

