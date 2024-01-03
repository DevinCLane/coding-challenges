/* 
Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

const countChar = (str) => {
    const count = {};
    for (const char of str) {
        count[char] = count[char] + 1 || 1;
    }
    return count;
};

console.log(countChar("aba"), { a: 2, b: 1 });
console.log(countChar("abaaaab"), { a: 5, b: 2 });
