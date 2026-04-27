/* 
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

https://www.codewars.com/kata/52efefcbcdf57161d4000091
*/

const countChars = str => {
    const count = {}
    for (char of str) {
        if (count[char]) {
            count[char]++
        } else count[char] = 1
    }
    return count;
}

console.log(countChars("aba"), { a: 2, b: 1 }); 
console.log(countChars(""), {})