'use strict';

console.log('Hello world!');

/* 
 console이 출력가능한 이유
    : Node.js와 Web API 둘 다 console에 관련된 API(Application Programming Interface)가 있기 때문
    : 둘의 API의 인터페이스가 동일하다

    // Web API
        : Javascipt 언어 자체에 포함된 것이 아니라 브라우저가 제공하는 브라우저가 이해할 수 있는 함수

*/


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