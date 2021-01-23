const board = [];

class Tetris {
    constructor(space) {
        this.emptySpace = space;
    }
}

function solution(m, v) {
    for (let space of v) {
        insert(m, space, getInsertIndex(space));
    }

    return board.length;
}

function getInsertIndex(space) {
    let insertIndex = board.length;

    for (let index = board.length - 1; index >= 0; index -= 1) {
        if (board[index].emptySpace >= space) {
            insertIndex = index;
        } else {
            return insertIndex;
        }
    }
    return insertIndex;
}

function insert(m, space, index) {
    if (index >= board.length) {
        board.push(new Tetris(m - space));
    } else {
        board[index].emptySpace -= space;
    }
}