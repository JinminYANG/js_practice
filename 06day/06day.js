var a = "Hello"; // 전역 스코프

function print() { // 지역(함수) 스코프
    var a = "World!";
    console.log(a);
}
print();

console.log(a);

