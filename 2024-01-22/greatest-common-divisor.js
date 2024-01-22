/* 
Greatest Common Divisor
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/

// recursive using Euclidean algorithm
const greatestCommonDivisor = (x, y) => {
    return y === 0 ? x : greatestCommonDivisor(y, x % y);
};

console.log(greatestCommonDivisor(30, 12), 6);
console.log(greatestCommonDivisor(8, 9), 1);
console.log(greatestCommonDivisor(1, 1), 1);

// iterative
const greatestCommonDivisor2 = (x, y) => {
    for (let i = Math.max(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
};

console.log(greatestCommonDivisor2(30, 12), 6);
console.log(greatestCommonDivisor2(8, 9), 1);
console.log(greatestCommonDivisor2(1, 1), 1);
