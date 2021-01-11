'use strict';

// JavaScript is synchronous(동기).
// Execute the code block in order after hoisting.
// (호이스팅 된 이후부터 코드를 작성한 순서에 맞춰 하나씩 동기적으로 실행된다.)
// hoisting: 변수, 함수 선언들이 제일 위로 올라가는 것

console.log('1');   // 동기

// asynchronous(비동기)
// 비동기적으로 언제 코드가 실행될 지 예측할 수 없는 것
setTimeout(() => {    // 브라우저 API: 브라우저한테 요청을 보내고 응답을 기다리지 않고 진행   / 비동기
    console.log(2);
}, 1000);

console.log('3');   // 동기


// Synchronous callback
function printImmediately(print) {           // 호이스팅에 의해 맨 위로 올라감
    print();
}

printImmediately(() => console.log('hello'));   // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {    // 호이스팅에 의해 위로 올라감
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);  // 비동기


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, (error) => {
                console.log(error);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);


