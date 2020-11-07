function solution(money, expected, actual) {
    let bet = 100;

    for (let i = 0; i < expected.length; i++) {
        if (expected[i] === actual[i]) {
            money += bet;
            bet = 100;
        } else if (money === 0) {
            break;
        } else {
            money -= bet;
            bet *= 2;
            if (bet >= money) {
                bet = money;
            }
        }
    }
    console.log(money);
    return money;
}

// solution(1000, ['H', 'T', 'H', 'T', 'H', 'T', 'H'], ['T', 'T', 'H', 'H', 'T', 'T', 'H']);
// solution(1200, ['T', 'T', 'H', 'H', 'H'], ['H', 'H', 'T', 'H', 'T']);
solution(1500,['H', 'H', 'H', 'T', 'H'],['T', 'T', 'T', 'H', 'T'])