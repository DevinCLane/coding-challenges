/* 
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

/* 
Parameters: strings
Return: sorted string a-z, comprised of distinct letters from s1 and s2
Ex: "aretheyhere", "yestheyarehere" => "aehrsty"
*/

const longest = (s1, s2) => {
    // combine the two strings
    const combined = s1 + s2; 
    // a new Set, which is an object comprised of only unique values
    const letters = new Set(combined);
    // create an array, sort the values, convert to a string
    return Array.from(letters).sort().join('');
}

// cleaning things up
const longestV2 = (s1, s2) => {
    return [...new Set(s1 + s2)].sort().join('');
}

// tests
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")