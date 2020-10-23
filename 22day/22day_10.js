// Array.prototype - splice()

let arr = [1, true, "JavaScript", "자바스크립트"];

// 인덱스 1의 요소부터 2개의 요소를 제거한 후, false와 "C언어"를 그 자리에 삽입함.
let removedElement = arr.splice(1, 2, false, "C언어" );

// 1번째 인덱스부터 2번째 인덱스의 요소가 삭제되고 삭제된 자리에 false와 "C언어"가 삽입된다.
console.log( arr );

// splice 하면서 삭제된 요소가 저장되어 있다.
console.log( removedElement );

