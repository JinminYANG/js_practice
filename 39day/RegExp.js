// 정규 표현 객체 (RegExp)
// : 입력 요소에 데이터를 규칙에 맞게 작성했는지 판단해서 알려주는 객체
// : 내가 지정한 규칙대로 단어가 입력되었는지, 잘못된 단어를 포함하고 있는지 찾을 때 사용한다.

// 정규 표현 객체를 생성하는 기본형
// 1. var 참조변수 = new RegExp(패턴, 검색옵션)
// 2. var 참조변수 = /패턴/검색옵션

/*
let str = "Html Css Jquery";
let reg1 = /css/;

let result_1 = reg1.test();
console.log(result_1);

let reg2 = /css/i;

let result_2 = reg2.test(str);
console.log(result_2);*/


let userName = prompt("당신의 이름은?");
reg1 = /^[가-힣]{2,5}$/;
while (true) {
    if (reg1.test(userName)) {
        break;
    }
    alert("이름 입력 형식이 잘못되었습니다.");
    userName = prompt("당신의 이름은?");
}

let userCell = prompt("당신의 휴대폰 번호는?");
reg2 = /^(010|016|011)\d{3,4}\d{4}$/;
while (true) {
    if (reg2.test(userCell)) {
        break;
    }
    alert("휴대폰 입력 형식이 잘못되었습니다.");
    userCell = prompt("당신의 휴대폰 번호는?");
}

let userEmail = prompt("당신의 이메일은?");
reg3 = /^\w{5,12}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,2}$/;
while (true) {
    if (reg3.test(userEmail)) {
        break;
    }
    alert("이메일 입력 형식이 잘못되었습니다.");
    userEmail = prompt("당신의 이메일은?");
}