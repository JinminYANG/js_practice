// 함수 (function)

const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
console.log(result2);

function add(a, b) {
    return a + b;
}

const sum = add(3, 4);
console.log(sum);

const doSomeThing = add;
const result3 = doSomeThing(2, 3);
console.log(result3);

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(callback) {
    const result = callback(2, 3);  // add(2, 3)
    console.log(result);
}

surprise(add);

surprise(divide);