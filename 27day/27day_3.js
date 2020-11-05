// 3. character 연산

function solution(word) {
    let rtn = '';

    let Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let AlphabetBackwards = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    // let lowerAlphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    // let lowerAlphabetBackwards = [z, y, x, w, v, u, t, s, r, q, p, o, n, m, l, k, j, i, h, g, f, e, d, c, b, a];

    let tempWord = word.toUpperCase();
    // console.log(tempWord.length);

    for (let i = 0; i < tempWord.length; i++) {
        for (let k = 0; k < Alphabet.length; k++) {
            if (tempWord.charAt(i) === ' ') {
                rtn += ' ';
                break;
            }
            if (tempWord.charAt(i) === Alphabet[k]) {
                let temp = tempWord.charAt(i);
                // console.log(temp);
                rtn += temp.replace(temp, AlphabetBackwards[k]);
                // rtn += ' ';
                break;
            }
        }
    }

    // console.log(rtn);
    // console.log(word);

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == word.charAt(i).toLowerCase()) {
            rtn = rtn.replace(rtn.charAt(i), rtn.charAt(i).toLowerCase());
        }
    }
    console.log(rtn);

    return rtn;
}

solution("I love you");