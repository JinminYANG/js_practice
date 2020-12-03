const calculator = document.querySelector("#calculator");
let resultValue = calculator.querySelector("#resultValue");
const buttons = calculator.querySelectorAll("button");

let calculateValue = '';
let operator;
let currentValue = '';

function addition(){
    result();
    operator = "+";
    calculateValue += operator;
    currentValue = '';
}

function subtraction(){
    result();
    operator = "-";
    calculateValue += operator;
    currentValue = '';

}

function multiplication(){
    result();
    operator = "*";
    calculateValue += operator;
    currentValue = '';
}

function division(){
    result();
    operator = "/";
    calculateValue += operator;
    currentValue = '';

}

function resetValue(){
    resultValue.innerText = '0';
    calculateValue = '';
    currentValue = '';
}

function result(){
    const result = eval(calculateValue);
    resultValue.innerText = result;
    currentValue = result;
    calculateValue = result;
}

function numbers(value){
    calculateValue += parseInt(value);
    currentValue += parseInt(value);
    resultValue.innerText = currentValue;
}

function handleButton(event){
    event.preventDefault();
    // console.log(event.target.innerText);
    const select = event.target.innerText;
    if(select === "+"){
        addition();
    }else if(select === "-"){
        subtraction();
    }else if(select === "*"){
        multiplication();
    }else if(select === "/"){
        division();
    }else if(select === "C"){
        resetValue(select);
    }else if(select === "="){
        result();
    }else{
        numbers(select);
    }
}

buttons.forEach(function (element){
    element.addEventListener("click", handleButton);
});

