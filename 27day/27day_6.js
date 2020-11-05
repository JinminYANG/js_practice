// 6. 상태 다이어그램  씨발

function solution(totalTicket, logs) {
    let rtn = [];

    let startTime = new Date();
    startTime.setHours(9);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    let hh = startTime.getHours();
    let mi = startTime.getMinutes();
    let ss = startTime.getSeconds();

    console.log(hh + " : " + mi + " " + ss);

    // let ticketingTime = setInterval(startTime, 1000);
    // console.log(ticketingTime);

    return rtn;
}

solution(2000, ["woni request 09:12:29", "brown request 09:23:11", "brown leave 09:23:44", "jason request 09:33:51", "jun request 09:33:56", "cu request 09:34:02"]);