// 지뢰찾기 게임

function solution(N, mine) {
    let answer;

    let gameBoard = setGameBoard(N);

    for (let i = 0; i < mine.length; i++) {
        let first = mine[i][0];
        let second = mine[i][1];
        // console.log(first, second);

        gameBoard[first][second] = -1;
        setAroundCount(gameBoard, first, second);
    }

    returnToGameBoard(gameBoard);
    return answer;
}

function setGameBoard(N) {
    let gameBoard = [];

    for (let i = 0; i <= N + 1; i++) {
        gameBoard.push([]);
        for (let j = 0; j <= N + 1; j++) {
            gameBoard[i].push(0);
        }
    }

    return gameBoard;
}

function setAroundCount(gameBoard, first, second) {
    if (gameBoard[first - 1][second - 1] !== -1) {
        gameBoard[first - 1][second - 1] += 1;
    }
    if (gameBoard[first - 1][second] !== -1) {
        gameBoard[first - 1][second] += 1;
    }
    if (gameBoard[first - 1][second + 1] !== -1) {
        gameBoard[first - 1][second + 1] += 1;
    }
    if (gameBoard[first][second - 1] !== -1) {
        gameBoard[first][second - 1] += 1;
    }
    if (gameBoard[first][second + 1] !== -1) {
        gameBoard[first][second + 1] += 1;
    }
    if (gameBoard[first + 1][second - 1] !== -1) {
        gameBoard[first + 1][second - 1] += 1;
    }
    if (gameBoard[first + 1][second] !== -1) {
        gameBoard[first + 1][second] += 1;
    }
    if (gameBoard[first + 1][second + 1] !== -1) {
        gameBoard[first + 1][second + 1] += 1;
    }
}

function returnToGameBoard(gameBoard) {
    gameBoard.shift();
    gameBoard.pop();
    console.log(gameBoard.length);

    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i].shift();
        gameBoard[i].pop();
    }

    return gameBoard;
}

solution(9, [[1, 1], [1, 7], [2, 7], [3, 6], [4, 1], [4, 4], [4, 8], [8, 4], [8, 5], [9, 6]]);
