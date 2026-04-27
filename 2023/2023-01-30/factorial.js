/* 
Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
5! = 5 * 4 * 3 * 2 * 1 = 120.
The value of 0! is 1.

Your task
You have to create the function factorial that receives n and returns n!. You have to use recursion.

https://www.codewars.com/kata/5694cb0ec554589633000036
*/

// recursion
const factorial = n => {
    // base case
    if (n < 2) {
        return 1;
    } else {
        return factorial(n - 1) * n
    }
}

console.log(factorial(5), 120)
console.log(factorial(4), 24)
console.log(factorial(3), 6)
console.log(factorial(0), 1)

// with memoization
const factorial2 = n => {
    const memo = {}
    // base case
    if (n < 1) {
        return 1;
    } else if (memo[n]) {
        return memo[n]
    } else {
        let result = factorial(n - 1) * n
        memo[n] = result;
        return result;
    }
}

console.log(factorial2(5), 120)
console.log(factorial2(4), 24)
console.log(factorial2(3), 6)
console.log(factorial2(0), 1)