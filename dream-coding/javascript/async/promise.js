'use strict';

/*
 Promise
    : JavaScript에서 제공하는 Asynchronous(비동기)를 간편하게 처리할 수 있도록 도와주는 Object
    : 정해진 시간에 기능을 수행하고 나서 정상적으로 기능이 수행되었다면 성공의 메시지와 함께 처리된 결과값을 전달해준다.
    : 기능을 수행하다가 예상치 못한 문제가 발생한다면 에러를 전달해준다.

 State (상태)
    - pending : 프로세스가 무거운 operation을 수행하고 있는 중인지    => fulfilled(성공) or rejected(실패)
    - / 기능 수행이 다 완료가 되어서 성공했는지 실패했는지
 Producer / Consumer 의 차이 이해
 */

// 1. Producer
// when new Promise is created, the executor runs automatically!

const promise = new Promise((resolve, reject) => {
    // doing some heavy work : 네트워크에서 데이터를 받아오거나 파일에서 데이터를 읽어오는 과정은 시간이 꽤 걸린다.
    // 동기적으로 처리할 경우 다음 것으로 진행이 안되기 때문에 비동기적처리를 하여 따로 처리하는 것이 유용하다.

    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers: then, catch, finally
// then() : promise가 정상적으로 수행이 잘 되어서 최종적으로 resolve() 콜백함수를 통해서 전달한 'ellie' 값이 value 파라미터로 전달되어진다.
promise     //
    .then((value) => {          // 성공
        console.log(value);
    })
    .catch((error) => {         // 실패
        console.log(error);
    })
    .finally(() => {    // 마지막에 항상
        console.log('finally');
    });


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000)
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 알`), 1000);
        setTimeout(() => reject(new Error(`${hen} => 알`)), 1000);

    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return '빵';
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);












