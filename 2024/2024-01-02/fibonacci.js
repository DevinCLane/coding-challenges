/* 
The Fibonacci numbers, 
commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

https://leetcode.com/problems/fibonacci-number/
*/

const fibonacci = (n) => {
    // set up the first two values
    const result = [0, 1];
    // 0 and 1 will not pass through this, so we'll just return 0 and 1 as their results
    // because we've set up i to start at 1, result[i] + result[i - 1] will be the same as f(n - 1) + f(n - 2)
    for (let i = 1; i < n; i++) {
        result.push(result[i] + result[i - 1]);
    }
    return result[n];
};

console.log(fibonacci(6), 8);
console.log(fibonacci(5), 5);
console.log(fibonacci(4), 3);
console.log(fibonacci(3), 2);
console.log(fibonacci(2), 1);
console.log(fibonacci(1), 1);
console.log(fibonacci(0), 0);

const fibonacci2 = (n) => {
    // set up the first two numbers
    let current = 0,
        next = 1;

    // iterate up to the input n
    for (let i = 0; i < n; i++) {
        // our current value becomes our previous value
        let previous = current;

        // the current value now holds the next value
        current = next;

        // calculate the next number
        // adding the previous and the current
        next = previous + current;
    }

    // after the loop, current will hold the nth number, so return it
    return current;
};

console.log(fibonacci2(6), 8);
console.log(fibonacci2(5), 5);
console.log(fibonacci2(4), 3);
console.log(fibonacci2(3), 2);
console.log(fibonacci2(2), 1);
console.log(fibonacci2(1), 1);
console.log(fibonacci2(0), 0);

// recursive
const fibonacci3 = (n) => {
    if (n < 2) {
        return n;
    } else {
        return fibonacci3(n - 1) + fibonacci3(n - 2);
    }
};

console.log(fibonacci3(6), 8);
console.log(fibonacci3(5), 5);
console.log(fibonacci3(4), 3);
console.log(fibonacci3(3), 2);
console.log(fibonacci3(2), 1);
console.log(fibonacci3(1), 1);
console.log(fibonacci3(0), 0);

// recursive with memoization
const fibonacci4 = (n) => {
    const memo = {};
    if (n < 2) {
        return n;
    } else if (memo[n]) {
        return memo[n];
    } else {
        let result = fibonacci4(n - 1) + fibonacci4(n - 2);
        memo[n] = result;
        return result;
    }
};

console.log(fibonacci4(6), 8);
console.log(fibonacci4(5), 5);
console.log(fibonacci4(4), 3);
console.log(fibonacci4(3), 2);
console.log(fibonacci4(2), 1);
console.log(fibonacci4(1), 1);
console.log(fibonacci4(0), 0);
