// #2. 콘솔에 출력, script async와 defet의 차이점
'use strict';
/*
    'use strict'
        : javascript를 이용할 때 제일 윗부분에 'use strict'을 정리해주는 것이 좋다.
        : typescirpt를 쓸 때는 선언할 필요 없음
        : 순수 바닐라JS를 이용할때는 쓰는 것이 좋음

    why?
        : Javascript is very flexible
        : flexible === dangerous
        : javascript에서는 선언되지 않은 변수에 값을 할당하는 경우, 기존에 존재하는 프로토타입을 변경하는 경우와 같이 비상식적인 경우를 막아준다.
        : javascript 엔진이 조금 더 효율적으로 빠르게 분석할 수 있기 때문에 실행하는데 있어서 더 나은 성능
*/

console.log('Hello world!');
/* 
 console이 출력가능한 이유
    : Node.js와 Web API 둘 다 console에 관련된 API(Application Programming Interface)가 있기 때문
    : 둘의 API의 인터페이스가 동일하다

    // Web API
        : Javascipt 언어 자체에 포함된 것이 아니라 브라우저가 제공하는 브라우저가 이해할 수 있는 함수

*/


// #3. data type, let vs var, hoisting
{
    let name = 'Jinmin';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
/*
    Variable, rw(read/write) (메모리에 값을 읽고 쓰는 것이 가능)
    let (added in ES6)
    Global scope vs Block scope
        : Global file안에 바로 정리해서 사용하는 변수, 어느 곳에서나 접근이 가능하다.
        : Block {}(중괄호)을 이용하여 코드를 block 안에 작성하게 되면 block 외부에서는 안에 내용을 불러올 수 없다.
        : 예시와 같이 name을 {} 외부에서 접근하게 되면 아무 값도 나오지 않는 것을 확인할 수 있다.
        : 메모리 어딘가에 할당된 부분을 가리키고 있어서 포인터를 이용하여 값을 계속 바꿔나갈 수 있다.
        : Mutable Data Type (값이 변경될 수 있는 것)(통칭)

    var을 사용하지 않는 이유
        : 변수 선언을 하지 않고 값을 할당할 수 있음, 값을 할당하기 전에도 출력이 가능함(undefined)
        : ex) console.log(age);     // undefined
              age = 4;
              console.log(age);     // 4
              var age;
        : 호이스팅 (hoisting)
            = 어디에 선언했냐에 상관없이 항상 제일 맨위로 선언을 끌어올려 주는 것
            = var 예시의 경우 var age;가 호이스팅으로 맨위로 올라가기 때문에 age = 4;처럼 값이 할당된다.
        : Block scope를 무시한다. {}안에 변수를 선언했음에도 불구하고 Global을 사용하는 것처럼 사용이 된다.

    Constant (const), r(read only)
    : 한 번 할당하면 값이 절대 바뀌지 않음 (변수 선언함과 동시에 값이 할당되면 수정할 수 없음)
    : 메모리 어딘가에 할당된 부분을 가리키고 있는데 그 포인터를 잠군다.
    : Immutable Data Type (값의 변경이 불가능)(통칭)
    : 개발자들은 할당한 다음 다시는 변경되지 않는 데이터 타입을 사용하라고 권고
        security (누군가 접근하여 값을 임의로 건들지 못하도록)
        thread safety (어플리케이션이 실행되면 한가지 프로세스가 할당이되고 그 프로세스 안에서는 다양한 스레드가 동시에 돌아가만서 어플리케이션을 효율적으로 빠르게 동작할 수 있도록 도와주는데 이 과정에서 스레드들이 동시에 변수에 접근하여 값을 변경할 수가 있는 위험한 상황이 발생할 수 있다.)
        reduce human mistakes (나중에 코드를 변경하거나 다른 개발자가 코드를 바꿀 때도 그 실수를 방지할 수 있다.)

    Note!
        : Immutable Data Type : primitive types, frozen objects (데이터 자체를 절대 변경하지 못한다.)
        : Mutable Data Type : all objects by default are mutable in JS  (변경이 가능한 데이터 타입 => object) (JS에서는 기본적으로 모든 object가 변경이 가능하다.)

*/

/*
    Variable types
     : 어떤 프로그래밍 언어든 primitive type과 object type 으로 나누어져 있다.
    primitive
        : 값 자체가 메모리에 저장
        : 더 이상 작은 단위로 나누어질 수 없는 한 가지의 아이템
        : number, string, boolean, null, undefined, symbol
            number
                - 숫자를 사용할 때 
                - (-2^53) ~ 2^53 범위의 숫자만 표현이 가능
                - js에서는 숫자를 이용할 때 number를 선언할 필요가 없음 (type이 다이나믹하게 결정이 되기 때문에)
                - typescript에서는 number라고 입력을 해줘야함
                - 양수를 0으로 나누면 Infinity
                - 음수를 0으로 나누면 -Infinity
                - 문자를 숫자로 나누면 NaN
                - 위 3가지 경우를 잘 확인하고 연산하는 것이 도움이 된다.
                + bigint
                    - 1234567890n
                    - 숫자 끝에 n을 입력하면 bigint로 간주
            string
                - 한가지 문자, 여러개의 문자열 모두 string type으로 할당이 된다.
                - string과 다른 변수를 '+' 기호를 이용하여 string에 붙이는 것이 가능하다.
                - template literals(string)
                    - '`'기호를 이용하여 원하는 스트링을 적고 ${변수}을 이용하면 변수 값이 자동적으로 붙어서 나오는 것이 가능하다.
            boolean
                - false : 0, null, undefined, NaN, ''
                - true : false를 제외한 모든 값 (숫자, 문자)
            null
                - null로 값이 할당이 되어져 있는 경우
            undefined
                - 선언은 되었지만 아무것도 값이 지정되어 있지 않은 경우 (정해지지 않은 상태)
            symbol
                - map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 고유한 식별자가 필요할 때 쓰임
                - ex1)
                    const symbol1 = Symbol('id');
                    const symbol2 = Symbol('id');
                    console.log(symbol1 === symbol2);   // false
                - 동일한 string으로 작성했어도 다른 symbol로 만들어지기 때문에 주어지는 string에 상관없이 고유한 식별자를 만들때 사용된다.
                - ex2)
                    const gSymbol1 = Symbol.for('id');
                    const gSymbol2 = Symbol.for('id');
                    console.log(symbol1 === symbol2);   // true
                - console.log(symbol.description)처럼 symbol.description을 이용하여 string으로 변환하여 출력이 가능함.
        : ! primitive type은 value로 값이 저장된다.

    object
        : 너무 커서 한번에 메모리에 올라갈 수 없음
        : ex) 
            ellie object를 할당하게 되면 ellie가 가리키고 있는 곳에는 reference가 있다. 
            -> reference는 실제로 object를 가리키고 있는 곳. 
            -> reference를 통해서 실제로 메모리가 담겨있는 object를 가리키게 되는 것.
        : 한 가지의 아이템들을 여러 개 묶어서 한 단위로 관리할 수 있게 해주는 것
        : 물건과 물체들을 대표할 수 있는 박스 형태
        : ex)
            const ellie = { name: 'ellie', age: 20 };
            ellie는 const로 정의되어 있기 때문에 ellie가 가리키고 있는 메모리의 포인터가 잠겨 있어 다른 object로 할당이 불가
            ellie object 안에는 name과 age라는 변수가 존재.
            ellie.name, ellie.age 방식을 이용하면 각각 포인터가 가리키고 있는 메모리에 다른 값으로 할당이 가능하다.
        : ! object는 object를 가리키는 reference가 메모리에 저장된다.
    function
        : first-class function
            다른 데이터 type처럼 변수에 할당이 가능하고, 함수의 인자로도 전달이 되고, return type으로도 return할수 있는 것이 가능하다.
        : 
*/
/*
    Dynamic typing
        : javascipt는 dynamically typed language라고 불린다.
        : 변수를 선언할 때 어떤 타입인지 선언하지 않고 런파임 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있다는 것
        : ex)
            let text = 'hello';
            console.log(`value: ${text}, type: ${typeof text}`);    // value: hello, type: string
            text = 1;
            console.log(`value: ${text}, type: ${typeof text}`);    // value: 1, type: number
            text = '7' + 5;
            console.log(`value: ${text}, type: ${typeof text}`);    // value: 75, type: string
            text = '8' / '2';
            console.log(`value: ${text}, type: ${typeof text}`);    // value: 4, type: number
*/

// #4. 코딩의 기본 operator, if, for loop
/*

*/