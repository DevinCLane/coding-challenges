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
    const charMap = {};
    for (const char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    return charMap;
};

console.log(countChars("hello"), { h: 1, e: 1, l: 2, o: 1 });
