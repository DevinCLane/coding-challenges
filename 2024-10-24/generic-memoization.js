/* 
Make your memo funciton generic and accept the times10 function as a callback rather than defining
the n * 10 logic inside the if/else or pulling it in from the global scope

protip: take advantage of the fact that parameters are saved in the closure as well,
just like the cache from the previous example
*/

const times10 = (n) => n * 10;

const memoize = (cb) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            console.log("fetching from cache:", n);
            return cache[n];
        } else {
            console.log("calculating result");
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const memoizedTimes10 = memoize(times10);

console.log("task 4 calculated value:", memoizedTimes10(9));
console.log("task 4 cached value:", memoizedTimes10(9));
