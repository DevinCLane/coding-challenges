/* 
count all characters in the string
*/

const countChars = (str) => {
    const map = {};
    for (const char of str) {
        map[char] = ++map[char] || 1;
    }
    return map;
};

console.log(countChars("hello"), { h: 1, e: 1, l: 2, o: 1 });
console.log(countChars("bye"), { b: 1, y: 1, e: 1 });
