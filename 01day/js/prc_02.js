var puppy = {
    name: "가을",
    age: 3,
    weight: 700,
    walk: function(){ // puppy라는 객체 안에 walk라는 메소드를 만듬
        return this.weight-30; // walk 메소드를 호출 했을 때 기존의 입력한 몸무게에서 30을 뺀 값을 리턴
    }
};

document.write("강아지의 몸무게: " + puppy.weight + "<br>");
document.write("강아지의 산책 후 몸무게: " + puppy.walk() + "<br>");
document.write("강아지의 몸무게: " + puppy.weight + "<br>");