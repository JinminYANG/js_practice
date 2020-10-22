let date = new Date(); // Date 객체 생성
console.log(date);

console.log( new Date("December 14, 1977 13:30:00") );
                            // 날짜를 나타내는 문자열

console.log( new Date(80000000) );
                            // 1970년 1월 1일 0시부터 해당 밀리초만큼 지난 날짜

console.log( new Date(16, 5, 25) );
                            // 3개의 숫자로 나타내는 날짜이며, 시간은 자동으로 0시 0분 0초

console.log( new Date(16, 5, 25, 15, 40, 0) );
                            // 7개의 숫자로 나타내는 날짜

console.log( new Date(2016, 5, 25, 15, 40, 0) );
                            // 2000년대를 표기하고자 할때는 연도를 전부 표기해야한다.
