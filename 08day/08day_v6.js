var globalNum = 10;     // globalNum을 전역 변수로 선언함.

function printNum() {

    console.log("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다."); // ①

    var globalNum = 20; // globalNum을 지역 변수로 선언함. // ②

    console.log("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.");

}

printNum();

