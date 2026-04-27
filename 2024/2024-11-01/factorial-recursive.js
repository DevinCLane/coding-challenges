/* 
write your own recursive factorial method

task 2: create a memo function to memoize the factorial method

(the memo is only helping us if we need to call the function again)
*/

const memo = (cb) => {
    const cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log("fetching from cache", n);
            return cache[n];
        } else {
            console.log("calculating results", n);
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

const cacheFactorial = memo(factorial);

console.log(cacheFactorial(5), 120);
console.log(cacheFactorial(8), 40320);
