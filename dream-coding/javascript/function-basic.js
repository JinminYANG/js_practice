// 1. 함수 선언 & 호출

// 함수 선언
function doSomething() {
    console.log('hello');
}

// 함수 호출
doSomething();


// 2. 값을 리턴하는 함수
function add(a, b) {
    const sum = a + b;
    return sum;
}

const result = add(1, 2);
console.log(result);


// 3. 언어 공부 방법
// console.log() 하나하나 찍으면서 학습할 것


// 4. 함수를 인자로 전달
function doSomething1(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

doSomething1(add);          // 함수를 전달할 때는 함수의 이름만 사용하여 전달해야함
// doSomething1(add());     // '()'괄호를 사용하면 인자값 안에 있는 함수가 먼저 실행된다.
// doSomething1(add(1, 2));


// 5. 함수를 변수에 할당
const addFun = add;
console.log(addFun);
addFun(1,2);

















