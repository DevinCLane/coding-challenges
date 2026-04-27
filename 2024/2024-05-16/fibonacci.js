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
    const result = [0, 1];
    for (let i = 1; i < n; i++) {
        result.push(result[i] + result[i - 1]);
    }
    return result[n];
};

console.log(fibonacci(0), 0);
console.log(fibonacci(1), 1);
console.log(fibonacci(2), 1);
console.log(fibonacci(3), 2);
console.log(fibonacci(4), 3);
console.log(fibonacci(5), 5);
console.log(fibonacci(6), 8);

const fibonacci2 = (n) => {
    if (n < 2) {
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
};

console.log(fibonacci2(0), 0);
console.log(fibonacci2(1), 1);
console.log(fibonacci2(2), 1);
console.log(fibonacci2(3), 2);
console.log(fibonacci2(4), 3);
console.log(fibonacci2(5), 5);
console.log(fibonacci2(6), 8);

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

console.log(fibonacci3(0), 0);
console.log(fibonacci3(1), 1);
console.log(fibonacci3(2), 1);
console.log(fibonacci3(3), 2);
console.log(fibonacci3(4), 3);
console.log(fibonacci3(5), 5);
console.log(fibonacci3(6), 8);
