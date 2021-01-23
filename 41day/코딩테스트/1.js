// 1

// 서버개수 n, 유저가 새 캐릭터를 생성한 기록이 담긴 배열 record
// 각 서버별로 어떤 캐릭터들이 생성됐는지 닉네임을 문자열 배열 형태로 return

function solution(n, record) {
    let answer = [];
    let servers = serverCount(n);
    // console.log(servers);
    let userInfo = users(record);
    // console.log(userInfo);

    let serverToInfo = serverForUser(userInfo, servers);
    console.log(serverToInfo);

    let setServerToInfo = Array.from(new Set(serverToInfo[0]));
    console.log(setServerToInfo);

    return answer;
}

function serverForUser(userInfo, servers) {
    const arr = [];
    for (let i = 0; i < servers.length; i++) {
        arr.push([]);
    }

    for (let k = 0; k < userInfo.length; k++) {
        switch (userInfo[k][0]) {
            case '1':
                arr[0].push(userInfo[k][1]);
                break;
            case '2':
                arr[1].push(userInfo[k][1]);
                break;
            case '3':
                arr[2].push(userInfo[k][1]);
                break;
            case '4':
                arr[3].push(userInfo[k][1]);
                break;
            case '5':
                arr[4].push(userInfo[k][1]);
                break;
            case '6':
                arr[5].push(userInfo[k][1]);
                break;
            case '7':
                arr[6].push(userInfo[k][1]);
                break;
            case '8':
                arr[7].push(userInfo[k][1]);
                break;
            case '9':
                arr[8].push(userInfo[k][1]);
                break;
        }
    }
    return arr;
}

function serverCount(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    return arr;
}

function users(record) {
    const arr = [];
    for (let i = 0; i < record.length; i++) {
        arr.push(record[i].split(" "));
    }
    return arr;
}

solution(4, ["1 a", "1 b", "1 abc", "3 b", "3 a", "1 abcd", "1 abc", "1 aaa", "1 a", "1 z", "1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]);








