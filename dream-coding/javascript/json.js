'use strict';

// JSON

/*
    브라우저 위에서 동작하고 있는 웹 사이트는 웹 어플리케이션과 같은 클라이언트들이 어떻게 서버와 통신할 수 있는지를 정리한 것이 HTTP(Hypertext Transfer Protocol)

    HTTP
        - HTTP는 어떻게 Hypertext를 서로 주고 받을 수 있는지를 규약한 프토토콜의 하나
        - HTTP는 클라이언트가 서버에게 request(요청)할 수 가 있음
        - 서버는 클라이언트가 요청한 것에 따라서 그에 맞는 response(응답) 클라이언트에 보내줌
        - Hypertext는 웹 사이트에서 이용되어지고 있는 하이퍼링크만 얘기하는 것이 아니라 전반적으로 쓰여지고 있는 리소스를 문서나 이미지 파일들을 포함해서 얘기한다.

    HTTP를 이용해서 서버에게 데이터를 요청해서 받아올 수 있는 방법으로는 AJAX(Asynchronous JavaScript And XML)

    AJAX
        - 웹 페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술을 의미
        - 대표적으로 XHR(XMLHttpRequest)
            XHR
                - 브라우저 API에서 제공하는 Object중에 하나
                - 이 Object를 이용하면 간단하게 서버에게 데이터를 요청하고 받아올 수가 있음
                - 최근에는 브라우저의 API에 추가된 fetch() API를 이용하면 간편하게 데이터를 주고받을 수 있음

    XML
        - HTML과 같은 마크업 언어중의 하나
        - 태그들을 이용하여 데이터를 표현
        - 불필요한 태그들이 많아 파일 사이즈가 커질뿐만 아니라 가독성도 좋지 않기 때문에 많이 사용되어지고 있지 않다.
        - XML 대신에 요즘에는 JSON을 많이 사용한다.

    JSON(JavaScript Object Notation)
        - JavaScript에서 Object는 { key: value }로 이루어져 있는데, JSON도 똑같이 { key: value }로 이루어져 있음
        - 브라우저뿐만 아니라 모바일에서 서버와 데이터를 주고 받을 때, 또는 서버와 통신을 하지 않아도 Object를 파일 시스템에 저장할 때도 사용
        - 텍스트를 기반으로하여 가벼움
        - 가독성이 좋음
        - 데이터를 보통 서버와 주고받을 때 serialization(직렬화)을 위하고 전송할 때 사용
        - 프로그래밍 언어나 플랫폼에 상관없이 사용할 수 있다.
 */


// 1. Object to JSON
// stringity(obj)
/*
    어떤 타입의 Object를 받아와서 string으로 변환해준다
    옵션으로 replacer 콜백함수가 있다.
    replacer는 콜백함수인데 어떤 결과값을 변형한다.
 */
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);     // "(더블 쿼터)를 사용하여 표현된다. (JSON의 규격사항)
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),   // JavaScript에만 존재하는 특별한 데이터도 JSON에 포함되지 않는다.
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);      // jump() 함수는 JSON에 포함되지 않는 것을 확인

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);        // 토끼의 Object를 감싸고 있는 제일 최상위의 것이 먼저 전달, 그 뒤부터 key와 value들이 전달되는 것을 확인할 수 있음
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
/*
    JSON의 string 데이터를 넣으면 어떤 타입의 Object로 변환이 된다.
    옵션으로 reviver 콜백함수가 있다.
    reviver는 콜백함수인데 어떤 결과값을 변형한다.
 */
json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump();     // error! -> rabbit을 JSON으로 변환할 때 메소드 포함하지 않으니 당연히 JSON으로 변환된 rabbit을 parse 해도 메소드는 포함되어있지 않음
console.log(rabbit.birthDate.getDate());    // rabbit에서 Date는 Object 자체이다.
// console.log(obj.birthDate.getDate());       // error! -> birthDate는 string이기 때문에 API를 이용할 수 없음

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(rabbit.birthDate.getDate());    // rabbit에서 Date는 Object 자체이다.
console.log(obj2.birthDate.getDate());




// JSON 공부 사이트
/*
    JSON Diff checker: http://www.jsondiff.com/                             // 서버에게 요청했을 때 첫번째로 받아온 데이터와 두번째로 받아온 데이터를 비교할 때 유용 (디버깅)
    JSON Beautifier/editor: https://jsonbeautifier.org/                     // 서버에서 받아온 JSON을 복붙하면 포맷이 망가지는 경우에 사용 (라인 정리)
    JSON Parser: https://jsonparser.org/                                    // JSON타입을 Object형태로 확인해보고 싶을 때 사용
    JSON Validator: https://tools.learningcontainer.com/json-validator/     // 유효한 JSON 데이터인지 확인할 때 사용 (오타 및 오류 확인)
 */