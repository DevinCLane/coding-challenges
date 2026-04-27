/* 
task 1: write your own recursive factorial method

task 2: create a memo function to memoize the factorial method

(the memo is only helping us if we need to call the function again)
*/

const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(5), 120);

const memo = (cb) => {
    const cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log("fetching from cache...");
            return cache[n];
        } else {
            console.log("calculating result...");
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const memoFactorial = memo(factorial);
console.log(memoFactorial(5));
console.log(memoFactorial(5));
