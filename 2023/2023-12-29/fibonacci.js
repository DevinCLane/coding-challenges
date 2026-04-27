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

const fibonacciIterative = (n) => {
    const result = [0, 1];
    // start i at 1, so that both 0 and 1 do not pass the test, then we can return result[n], which will be 0 and 1 respectively
    for (let i = 1; i < n; i++) {
        // sum of the previous two values
        result.push(result[i] + result[i - 1]);
    }
    return result[n];
};

console.log(fibonacciIterative(6), 8);
console.log(fibonacciIterative(5), 5);
console.log(fibonacciIterative(4), 3);
console.log(fibonacciIterative(3), 2);
console.log(fibonacciIterative(2), 1);
console.log(fibonacciIterative(1), 1);
console.log(fibonacciIterative(0), 0);

const fibonacciIterative2 = (n) => {
    // set up the first two fibonacci numbers
    let a = 0,
        b = 1;

    // loop n times
    for (let i = 0; i < n; i++) {
        // keep track of previous
        let temp = a;

        // stores the sum of the previous two numbers into a
        a = b;

        // b holds the sum of the previous two values
        // on the next iteration when we assign b to a, this will be the sum of the previous two values
        b = temp + a;
    }
    return a;
};

console.log(fibonacciIterative2(6), 8);
console.log(fibonacciIterative2(5), 5);
console.log(fibonacciIterative2(4), 3);
console.log(fibonacciIterative2(3), 2);
console.log(fibonacciIterative2(2), 1);
console.log(fibonacciIterative2(1), 1);
console.log(fibonacciIterative2(0), 0);

const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
};

console.log(fibonacciRecursive(6), 8);
console.log(fibonacciRecursive(5), 5);
console.log(fibonacciRecursive(4), 3);
console.log(fibonacciRecursive(3), 2);
console.log(fibonacciRecursive(2), 1);
console.log(fibonacciRecursive(1), 1);
console.log(fibonacciRecursive(0), 0);

const fibonacciRecursiveMemoization = (n) => {
    const memo = {};
    if (n < 2) {
        return n;
    } else if (memo[n]) {
        return memo[n];
    } else {
        let result =
            fibonacciRecursiveMemoization(n - 1) +
            fibonacciRecursiveMemoization(n - 2);
        memo[n] = result;
        return result;
    }
};

console.log(fibonacciRecursiveMemoization(6), 8);
console.log(fibonacciRecursiveMemoization(5), 5);
console.log(fibonacciRecursiveMemoization(4), 3);
console.log(fibonacciRecursiveMemoization(3), 2);
console.log(fibonacciRecursiveMemoization(2), 1);
console.log(fibonacciRecursiveMemoization(1), 1);
console.log(fibonacciRecursiveMemoization(0), 0);
