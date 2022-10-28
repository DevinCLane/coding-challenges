/* 
Reverse a string using `for...of` syntax
*/

const reverseString = str => {
    let answer = ''
    for (const letter of str) {
        answer = letter + answer;
    }
    return answer
}

console.log(reverseString('algorithms'), 'smhtirogla')

// Reverse a string using a standard for loop

const reverseStringFor = str => {
    let answer = ''
    for (let i = str.length - 1; i >= 0; i--) {
        answer += str[i]
    }
    return answer
}

console.log(reverseStringFor('algorithms'), 'smhtirogla')