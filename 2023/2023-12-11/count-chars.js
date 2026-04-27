/* 
Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

/**
 *
 * @param {string} str
 * @returns {Object}
 */
const countChars = (str) => {
    const map = {};
    for (const char of str) {
        // map[char] = ++map[char] || 1
        if (map[char]) {
            ++map[char];
        } else map[char] = 1;
    }
    return map;
};

console.log(countChars("aba"), { a: 2, b: 1 });
console.log(countChars("aaabbabbb"), { a: 4, b: 5 });
