/* 
https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

/* 
My notes:
Parameters: integers
Returns: string in binary
Example: 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
    let sum = a + b;
    return (sum >>> 0).toString(2);
}
/* 
we use the >>> operator to coerce the argument to unsigned integers. 
if we just use Number.toString(2), the negative numbers won't work (will output -1 if given -1).
the >>> operator will coerce it to an unsigned integer.
-1 => '11111111111111111111111111111111' correctly, instead of -1
source: https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
 */ 

// test cases

console.log(addBinary(1, 2), '11')
console.log(addBinary(5, 9), '1110')