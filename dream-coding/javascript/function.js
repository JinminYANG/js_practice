"use strict";

/* Function
        - 프로그램을 구성하는 기본적인 빌딩 블록
        - 서브 프로그램이라고도 불리며, 재사용이 가능하다.
        - 한가지의 업무나 어떤 값을 계산하기 위해 사용된다.

*/

/*
    1. Function declaration (함수 정의)
        : function name(param1, param2) { body... return; }
        : 하나의 함수는 한 가지의 일만 하도록 만들어야 한다.
        : 이름짓기 => doSomething(무엇을 하는지), command(설명), verb(동사)
        : e.g. createCardAndPoint => createCard, createPoint
        : JavaScript에서 function은 Object이다. => 함수를 변수에 할당할 수도 있고, 파라미터로 전달할 수 도 있고, 함수를 리턴할 수 도 있다.
*/
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);


/*
    2. Parameters
        : premitive parameters: passed by value
        : object parameters: passed by reference
*/
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);


/*
    3. Defalut parameters (added in ES6)
*/
function showMessage1(message, from){
    console.log(`${message} by ${from}`);   // Hi! by undefined
}
showMessage1('Hi!');

function showMessage2(message, from = 'unknown'){
    console.log(`${message} by ${from}`);   // Hi! by unknown
}
showMessage2('Hi!');


/*
    4. Rest parameters (added in ES6)
*/
function printAll(...args) {    // ...을 사용하는 것이 Rest parameters 방식 (배열 형태로 전달)
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


/*
    5. Local scope
        : ! 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. !
*/
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);   // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // error!
}
printMessage();
// console.log(message);   // error!


/*
    6. Return a value
*/
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   // 3
console.log(`sum : ${sum(1, 2)}`);


/*
    7. Early return, early exit
*/

// bad
function upgradeUser(user) {
    if(user.point > 10) {   
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if(user.point <= 10) {  // 종료조건을 통해 빨리 리턴시킨다.
        return;
    }
    // long upgrade logic...
}



/*
    First-class Function
        - functions are treated lick any other variable
        - 변수에 할당이 된다.
        - function에 parameters로 전달이 된다.
        - return 값으로 사용할 수 있다.
*/

/*
    1. Function expression
        : 할당된 다음부터 호출이 가능하다.
        : hoisting이 된다.
*/
const print = function () { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


/*
    2. Callback function using function expression
*/
function randomQuiz(answer, printYes, printNo) {    // 여기서 콜백함수는 printYes, printNo가 된다.
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () { // anonymous function
    console.log('Yes!');
}

// named function
// 디버깅할 때 stack traces에 함수의 이름이 나오게 하기위해서 쓰임
// 함수안에서 자신을 호출할 때 사용 (재귀)
const printNo = function print() {
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


/*
    Arrow function
        : always anonymous
        : 함수를 간결하게 만들어준다.
        : 한줄로 사용할 경우 {}(block)을 해줄 필요도 없고, return을 해줄 필요도 없다.
        : 여러가지를 사용할 경우 {}(block)처리를 해주고, return을 해줘야한다.
*/
const simplePrint = function () {
    console.log('simplePrint!');
}
// const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;

const simpelMultiply = (a, b) => {
    // do something more
    return a * b;
};


/*
    IIFE: Immediately Invoked Function Expression
        - 함수를 선언함과 동시에 실행
*/
(function hello() {
    console.log('IIFE');
})();



// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b){
    switch(command){
        case 'add':
            console.log(a + b);
            break;
        case 'substract':
            console.log(a - b);
            break;
        case 'divide':
            console.log(a / b);
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'remainder':
            console.log(a % b);
            break;
        default:
            console.log(`command error: ${command} is not calculate`);
            break;
    }
}
calculate('add', 1, 8);
calculate('substract', 1, 8);
calculate('divide', 1, 8);
calculate('multiply', 1, 8);
calculate('remainder', 1, 8);
calculate('adder', 1, 8);