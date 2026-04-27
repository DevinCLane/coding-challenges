/* 
task 1: write your own recursive factorial method

task 2: create a memo function to memoize the factorial method

(the memo is only helping us if we need to call the function again)
*/

const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * recursiveFactorial(n - 1);
    }
};

const memo = (cb) => {
    const cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            return cache[n];
        } else {
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const cacheFactorial = memo(recursiveFactorial);
console.log(cacheFactorial(5), 120);
