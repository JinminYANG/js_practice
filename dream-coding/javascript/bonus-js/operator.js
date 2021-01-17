// 연산자 operator

// boolean
// false: 0, -0, '', null, NaN, undefined
// true: -1, 'hello', [], 'false', object
let num;    // undefined
if (num) {
    console.log('true!');
} else {
    console.log('false!');
}

// Object는 데이터가 비어있어도 object 자체가 만들어진 것이기 때문에 true
let obj = {
    name: 'ellie',
};
if (obj) {
    console.log('true!');
} else {
    console.log('false!');
}