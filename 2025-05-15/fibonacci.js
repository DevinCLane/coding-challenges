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

// iteratively

// array, start with 0 and 1
// loop starting at 2, i < n
// result.push arr[i - 1] + arr[i - 2]

const fibonacci = (n) => {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result[n];
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

const fibonacci2 = (n) => {
    if (n < 2) {
        return n;
    } else {
        return fibonacci2(n - 1) + fibonacci2(n - 2);
    }
};

console.log(fibonacci2(0));
console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(3));
console.log(fibonacci2(4));
console.log(fibonacci2(5));
console.log(fibonacci2(6));

const memo = {};
const fibonacci3 = (n) => {
    if (n < 2) {
        return n;
    } else if (n in memo) {
        return memo[n];
    } else {
        const result = fibonacci3(n - 1) + fibonacci3(n - 2);
        memo[n] = result;
        return result;
    }
};

console.log(fibonacci3(0));
console.log(fibonacci3(1));
console.log(fibonacci3(2));
console.log(fibonacci3(3));
console.log(fibonacci3(4));
console.log(fibonacci3(5));
console.log(fibonacci3(6));

const closure = (cb) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            const result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const memoizedFib = closure(fibonacci2);
console.log(memoizedFib(0));
console.log(memoizedFib(1));
console.log(memoizedFib(2));
console.log(memoizedFib(3));
console.log(memoizedFib(4));
console.log(memoizedFib(5));
console.log(memoizedFib(6));
