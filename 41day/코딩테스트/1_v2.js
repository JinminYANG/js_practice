const CHARACTER_MAX_NUMBER = 5;
const servers = [];

class Character {
    constructor(nick, number) {
        this.nick = nick;
        this.number = number;
    }
}

function solution(n, record) {
    for (let number = 1; number <= n; number += 1) {
        servers.push([]);
    }

    let number = 0;

    for (const characterString of record) {
        const temp = characterString.split(" ");
        const serverNumber = temp[0] - 1;
        const nick = temp[1];

        createCharacter(serverNumber, nick, number++);
    }

    const output = [];

    for (const server of servers) {
        for (const character of server) {
            output.push(character.nick);
        }
    }
    return output;
}

function createCharacter(server, nick, number) {
    for (const character of servers[server]) {
        if (character.nick === nick) {
            return;
        }
    }

    if (servers[server].length >= CHARACTER_MAX_NUMBER) {
        servers[server].splice(0, 1);
    }

    servers[server].push(new Character(nick, number));
}