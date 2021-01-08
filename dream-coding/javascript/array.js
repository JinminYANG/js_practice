'use strict';

// Array
// 한 배열안에는 동일한 type의 data를 넣는 것이 중요
// 배열의 point는 index
// 삽입과 삭제가 간편


// 1. Declaration (선언)
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);                            // ["사과", "바나나"] => 0: "사과", 1: "바나나", length: 2
console.log(fruits.length);                     // 2
console.log(fruits[0]);                         // 사과
console.log(fruits[1]);                         // 바나나
console.log(fruits[2]);                         // undefined
console.log(fruits[fruits.length - 1]);         // 바나나


// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
// fruits.forEach(function (fruit, index, array) {
//     console.log(fruit, index, array);
// });
fruits.forEach((fruit) => {
    console.log(fruit);
});


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('레몬');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);


// note!! shift, unshift are slower then pop, push
// 배열에 아이템들이 들어 있을 때 뒤에서부터 넣고 빼는 것은 빈 공간에 데이터를 넣었다가 지웠다가 하기 때문에 기존의 데이터들은 움직이지 않음
// 반대로 앞에서 데이터를 넣는 것은 n번째에 있는 아이템을 n+1번째로 옮기고 맨 앞의 공간을 비운 다음에 새로운 데이터를 입력
// 앞에서 데이터를 빼는 것은 첫번째에 있는 아이템을 지우고 n번째에 있는 아이템을 n-1번째로 옮겨야함

// splice: remove an item by index position
fruits.push('복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1);       // deleteCount를 지정하지 않으면 start부터 모든 데이터를 삭제한다.
console.log(fruits);
fruits.splice(1, 1, '수박', '귤');      // start로 지정한 자리에 deleteCount로 지정한 만큼 지워지고 그 자리에 새로운 item들이 들어간다.
console.log(fruits);

// combine two arrays
const fruits2 = ['배', '감'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));        // 0
console.log(fruits.indexOf('수박'));        // 1
console.log(fruits.indexOf('코코넛'));      // -1

// includes
console.log(fruits.includes('복숭아'));     // true
console.log(fruits.includes('코코넛'));     // false

// lastIndexOf
console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf('사과'));        // 찾으려고 하는 값중에 같은 값이 배열에 존재하는 경우 첫 번째로 해당하는 값의 인덱스를 리턴한다.
console.log(fruits.lastIndexOf('사과'));    // 찾으려고 하는 값중에 같은 값이 배열에 존재하는 경우 마지막에 해당하는 값의 인덱스를 리턴한다.




// Array methods 정리
/*
    length: Number
        - 배열의 길이를 가져오거나 설정한다.
        - 배열에 정의된 가장 높은 요소보다 하나 높은 숫자이다.

    toString(): string
        - 배열의 문자열 표현을 반환한다.

    pop(): T | undefined
        - 배열에서 마지막 요소를 제거하고 반환한다.

    push(...items: T[]): number
        - 새 요소를 배열에 추가하고 배열의 새 길이를 반환한다.
        - @param items은 배열의 새 항목이다.

    concat(...items: ConcatArray<T>[]): T[]
        - 두개 이상의 배열을 결합한다.
        - @param items는 array1의 끝에 추가된다.

    join(separator?: string): string
        - 지정된 구분 문자열로 구분된 배열의 모든 요소를 추가한다.
        - @param separator는 배열의 한 요소를 결과 문자열의 다음 요소와 구분하는데 사용되는 문자열이다. 생략할 경우 배열 요소는 쉼표','로 구분된다.

    reverse(): T[]
        - 배열을 뒤집는다.

    shift(): T | undefined
        - 배열에서 첫 번째 요소를 제거하고 반환한다.

    slice(start?: number, end?: number): T[]
        - 배열의 한 부분을 반환한다.
        - @param start는 배열의 지정한 부분의 시작이다.
        - @param end는 배열의 지정한 부분의 끝이다. 이 것은 인덱스 'end'의 요소를 제외한다.

    sort(compareFn?: (a: T, b: T) => number): this;
        - 배열을 정렬한다.
        - @param compareFn은 요소의 순서를 결정하는데 사용되는 함수이다. 첫 번째 인수가 두 번째 인수보다 작으면 음수 값을 반환하고, 같으면 0을 반환하고, 첫 번째 인수가 두 번째 인수보다 크면 양수 값을 반환한다. 요소가 오름차순 ASCII 문자 순서로 정렬된다.
        - [11,2,22,1].sort((a, b) => a - b)

    splice(start: number, deleteCount?: number): T[]
        - 배열에서 요소를 제거하고 필요한 경우 새 요소를 삽입하여 삭제된 요소를 반환한다.
        - @param start는 요소를 제거할 배열의 0기반 위치이다.
        - @param deleteCount는 제거할 요소의 수이다.

    splice(start: number, deleteCount: number, ...items: T[]): T[]
        - 배열에서 요소를 제거하고 필요한 경우 새 요소를 삽입하여 삭제된 요소를 반환한다.
        - @param start는 요소를 제거할 배열의 0기반 위치이다.
        - @param deleteCount는 제거할 요소의 수이다.
        - @param items는 삭제된 요소 대신 배열에 삽입할 요소이다.

    unshift(...items: T[]): number
        - 배열의 시작 부분에 새 요소를 삽입한다.
        - @param items는 배열 시작 부분에 삽입할 요소이다.

    indexOf(searchElement: T, fromIndex?: number): number
        - 배열에서 지정된 값이 처음 나타나는 인덱스를 반환한다.
        - @param searchElement는 배열에서 찾을 값이다.
        - @param fromIndex는 검색을 시작할 배열의 인덱스이다. 생략하면 0부터 시작한다.

    lastIndexOf(searchElement: T, fromIndex?: number): number
        - 배열에서 지정된 값의 마지막으로 나타나는 인덱스를 반환한다.
        - @param searchElement는 배열에서 찾을 값이다.
        - @param fromIndex는 검색을 시작할 배열의 인덱스이다. 생략할 경우 배열의 맨 마지막 번째부터 시작한다.

    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]
        - 배열의 모든 구성원이 지정된 테스트를 충족하는지 여부를 결정한다.
        - @param predicate는 최대 3개의 인수를 허용하는 함수이다. 모든 메소드는 조건자가 부울 값 false를 강제 변환 될 수 있느 값을 반환하거나 배열이 끝날 때까지 배열의 각 요소에 대해 조건자 함수를 호출한다.
        - @param thisArg가 조건자 함수에서 참조할 수 있는 개체이다. 생략하면 undefined가 값으로 사용된다.

    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
        - 배열의 모든 구성원이 지정된 테스트를 충족하는지 여부를 결정한다.
        - @param predicate는 최대 3개의 인수를 허용하는 함수이다. 모든 메소드는 조건자가 부울 값 false로 강제 변환 될 수 있느 값을 반환하거나 배열의 끝까지 배열의 각 요소에 대해 조건자 함수를 호출한다.
        - @param thisArg가 조건자 함수에서 참조할 수 있는 개체이다. 생략하면 undefined가 값으로 사용된다.

    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
        - 지정된 콜백 함수가 배열 요소에 대해 true르 반환하는지 여부를 결정한다.
        - @param predicate 최대 3개의 인수를 받는 함수이다. 조건자가 부울 값 true로 강제 변환될 수 있는 값을 반환하거나 배열의 끝 까지 배열의 각 요소에 대해 조건자 함수를 호출한다.
        - @param thisArg는 조건자 함수에서 참조할 수 있는 개체이다. 생략하면 'undefined'값이 사용된다.

    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void
        - 배열의 각 요소에 대해 지정된 작업을 수행한다.
        - @param callbackfn는 최대 3개의 인수를 받는 함수이다. 배열의 각 요소에 대해 callbackfn 함수를 한번 호출한다.
        - @param thisArg는 이 키워드가 callbackfn 함수에서 참조할 수 있는 객체이다. 생략하면 'undefined'값이 사용된다.

    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
        - 배열의 각 요소에 대해 정의된 콜백함수를 호출하고 결과를 포함하는 배열을 반환한다.
        - @param callbackfn는 최대 3개의 인수를 받는 함수이다. map 메소드는 배열의 각 요소에 대해 callbackfn 함수를 한 번 호출한다.
        - @param thisArg는 이 키워드가 callbackfn 함수에서 참조할 수 있는 객체이다. 생략하면 'undefined'값이 사용된다.

    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]
        - 콜백 함수에 지정된 조건을 충족하는 배열 요소를 반환한다.
        - @param predicate는 최대 3개의 인수를 받는 함수이다. filter 메소드는 배열의 각 요소에 대해 조건자 함수를 호출한다.
        - @param thisArg는 조건자 함수에서 참조할 수 있는 객체이다. 생략하면 'undefined'값이 사용된다.


    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]
        - 콜백 함수에 지정된 조건을 충족하는 배열 요소를 반환한다.
        - @param predicate는 최대 3개의 인수를 받는 함수이다. filter 메소드는 배열의 각 요소에 대해 조건자 함수를 호출한다.
        - @param thisArg는 조건자 함수에서 참조할 수 있는 객체이다. 생략하면 'undefined'값이 사용된다.

    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T
        - 배열의 모든 요소에 대해 지정된 콜백 함수를 호출한다. 콜백 함수의 반환 값은 누적된 결과이며, 콜백 함수에 대한 다음 호출에서 인수로 제공된다.
        - @param callbackfn는 최대 4개의 인수를 받는 함수이다. 배열의 각 요소에 대해 콜백 함수를 한 번 호출안다.
        - @param initialValue는 초기값이 지정되면 누적을 시작하기 위한 초기값으로 사용된다. 콜백 함수에 대한 첫 번째 호출은 이 값을 배열 값 대신 인수로 제공한다.

    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
        - 배열의 모든 요소에 대해 지정된 콜백 함수를 호출한다. 콜백 함수의 반환 값은 누적된 결과이며, 콜백 함수에 대한 다음 호출에서 인수로 제공된다.
        - @param callbackfn는 최대 4개의 인수를 받는 함수이다. 배열의 각 요소에 대해 콜백 함수를 한 번 호출안다.
        - @param initialValue는 초기값이 지정되면 누적을 시작하기 위한 초기값으로 사용된다. 콜백 함수에 대한 첫 번째 호출은 이 값을 배열 값 대신 인수로 제공한다.

    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T
        - 배열의 모든 요소에 대해 지정된 콜백 함수를 내림차순으로 호출한다. 콜백 함수의 반환 값은 누적된 결과이며 콜백 함수에 대한 다음 호출에서 인수로 제공된다.
        - @param callbackfn는 최대 4개의 인수를 받는 함수이다. 배열의 각 요소에 대해 콜백 함수를 한 번 호출안다.
        - @param initialValue는 초기값이 지정되면 누적을 시작하기 위한 초기값으로 사용된다. 콜백 함수에 대한 첫 번째 호출은 이 값을 배열 값 대신 인수로 제공한다.

    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
        - 배열의 모든 요소에 대해 지정된 콜백 함수를 내림차순으로 호출한다. 콜백 함수의 반환 값은 누적된 결과이며 콜백 함수에 대한 다음 호출에서 인수로 제공된다.
        - @param callbackfn는 최대 4개의 인수를 받는 함수이다. 배열의 각 요소에 대해 콜백 함수를 한 번 호출안다.
        - @param initialValue는 초기값이 지정되면 누적을 시작하기 위한 초기값으로 사용된다. 콜백 함수에 대한 첫 번째 호출은 이 값을 배열 값 대신 인수로 제공한다.

*/
