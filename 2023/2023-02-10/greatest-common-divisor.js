/* 
Greatest Common Divisor
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/

// for loop
const greatestCommonDivisor = (x, y) => {
    // which number is smaller, in the best case scenario this is the largest common divisor
    // count down from there, if x % i and y % i === 0, we found it
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i
        }
    }
}

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)

// recursion
const greatestCommonDivisor2 = (x, y) => {
    // the Euclidean algorithm says that gcd(x, y) = gcd(y, r) where x = y * q + r
    return y === 0 ? x : greatestCommonDivisor2(y, x % y)
}

console.log(greatestCommonDivisor2(30,12),6)
console.log(greatestCommonDivisor2(8,9),1)
console.log(greatestCommonDivisor2(1,1),1)

// recursion with memoization
const greatestCommonDivisor3 = (x, y) => {
    // the Euclidean algorithm says that gcd(x, y) = gcd(y, r) where x = y * q + r
    const memo = {}
    if (y === 0) {
        return x;
    } else if (memo[y]) {
        return memo[y]
    } else {
        let result = greatestCommonDivisor3(y, x % y)
        memo[y] = result;
        return result;
    }
}

console.log(greatestCommonDivisor3(30,12),6)
console.log(greatestCommonDivisor3(8,9),1)
console.log(greatestCommonDivisor3(1,1),1)