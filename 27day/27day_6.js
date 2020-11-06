// 6. 상태 다이어그램 성공인가..

function solution(totalTicket, logs) {
    let rtn = [];

    let activeLog = '';

    let names = [];
    let action = [];
    let times = [];

    for (let i = 0; i < logs.length; i++) {
        names.push(logs[i].split(" ")[0]);
        action.push(logs[i].split(" ")[1]);
        times.push(logs[i].split(" ")[2]);
    }

    let successTicketingIdx = 0;
    let endTime = 100000;

    for (let i = 0; i < logs.length; i++) {  // 접속 로그의 갯수만큼 반복
        if (action[i] === 'request') {       // 로그의 상태가 requset 이면
            if (activeLog === '') {          // 접속중인 로그가 없다면
                activeLog = times[i];        // 로그에 해당하는 시간을 집어넣음
                successTicketingIdx = i;
            } else if ((Math.abs(activeLog.replace(/:/g, '') - times[i].replace(/:/g, '')) > 60)) {     // 현재로그가 60초가 지났으면
                rtn.push(names[successTicketingIdx]);   // 현재 로그의 name을 rtn에 삽입
                activeLog = times[i];        // 로그에 해당하는 시간을 집어넣음
                successTicketingIdx = i;
                totalTicket -= 1;            // 총 티켓 개수 -1
            }
        } else {                             // 로그의 상태가 leave 이면
            activeLog = '';                  // 접속중인 로그를 비움
        }
    }

    if (activeLog != '' && endTime - Math.abs(activeLog.replace(/:/g, '')) >= 4100) {     // 마감 시간이 되었을때
        rtn.push(names[successTicketingIdx]);
        totalTicket -= 1;
    }

    console.log(rtn);
    console.log(totalTicket);
    
    rtn.sort();     // 오름차순 정렬
    console.log(rtn);
    
    return rtn;
}

solution(2000, ["woni request 09:12:29", "brown request 09:23:11", "brown leave 09:23:44", "jason request 09:33:51", "jun request 09:33:56", "cu request 09:59:00"]);