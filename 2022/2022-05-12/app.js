/* 
https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer

*/


function squareDigits(num) {
    let arr = Array.from(String(num), Number) // create an array from the number using the Array.from() method, which creates a new, shallow-copied Array instance from an array-like or iterable object. 
    let squaredNumbers = []; // store our result here
    for (let i = 0; i < arr.length; i++) { // iterate over array
        squaredNumbers.push(arr[i] * arr[i]); // square the numbers
    }

    return +squaredNumbers.join(''); // turn it back into a string, then turn into number
}
// test cases
// console.log(squareDigits(3212), 9414);
// console.log(squareDigits(2112), 4114);
// console.log(squareDigits(0), 0);

// cleanup v2
function squareDigitsV2(num) {
    return +Array.from(String(num), x => x * x).join(''); // silly one-liner
}

// test cases
console.log(squareDigitsV2(3212), 9414);
console.log(squareDigitsV2(2112), 4114);
console.log(squareDigitsV2(0), 0);