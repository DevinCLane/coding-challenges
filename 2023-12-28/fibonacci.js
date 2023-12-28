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

// recursive solution
const fibonacci = (n) => {
    // refactor: if (n < 2) return n
    if (n < 1) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

console.log(fibonacci(6), 8);
console.log(fibonacci(5), 5);
console.log(fibonacci(4), 3);
console.log(fibonacci(3), 2);
console.log(fibonacci(2), 1);
console.log(fibonacci(1), 1);
console.log(fibonacci(0), 0);

// for loops, iterative solution
const fibonacci2 = (n) => {
    // since we know f(1) = 1 and f(0) = 0
    const result = [0, 1];
    for (let i = 1; i < n; i++) {
        result.push(result[i] + result[i - 1]);
    }
    return result[n];
};

console.log(fibonacci2(6), 8);
console.log(fibonacci2(5), 5);
console.log(fibonacci2(4), 3);
console.log(fibonacci2(3), 2);
console.log(fibonacci2(2), 1);
console.log(fibonacci2(1), 1);
console.log(fibonacci2(0), 0);

// recursion with memoization
const fibonacci3 = (n) => {
    const memo = {};
    if (n < 2) {
        return n;
    } else if (memo[n]) {
        return memo[n];
    } else {
        let result = fibonacci3(n - 1) + fibonacci3(n - 2);
        memo[n] = result;
        return result;
    }
};

console.log(fibonacci3(6), 8);
console.log(fibonacci3(5), 5);
console.log(fibonacci3(4), 3);
console.log(fibonacci3(3), 2);
console.log(fibonacci3(2), 1);
console.log(fibonacci3(1), 1);
console.log(fibonacci3(0), 0);

// another iterative solution
const fibonacci4 = (n) => {
    // set up the first two fibonacci numbers
    let a = 0;
    let b = 1;

    // loop n number of times
    for (let i = 0; i < n; i++) {
        // copy current value of 'a' to 'temp'
        // this acts as the "previous" value
        let temp = a;

        // set a to b, b becomes the "current" value
        a = b;

        // calculate the next fibonacci number by summing "previous" and "current"
        b = temp + b;
    }

    // after the loop, 'a', holds the nth fibonacci number
    return a;
};

console.log(fibonacci4(6), 8);
console.log(fibonacci4(5), 5);
console.log(fibonacci4(4), 3);
console.log(fibonacci4(3), 2);
console.log(fibonacci4(2), 1);
console.log(fibonacci4(1), 1);
console.log(fibonacci4(0), 0);
