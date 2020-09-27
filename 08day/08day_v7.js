var globalNum = 10;

function printNum() {

    var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동

    console.log("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.");

    globalNum = 20;

    console.log("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.");

}

printNum();

