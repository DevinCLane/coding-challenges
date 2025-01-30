/* 
Make your memo function generic and accept the times10 function as a callback rather than defining
the n * 10 logic inside the if/else or pulling it in from the global scope

protip: take advantage of the fact that parameters are saved in the closure as well,
just like the cache from the previous example
*/

const memo = (cb) => {
    const cache = {};
    return (n) => {
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

const times10 = (n) => n * 10;

const memoizedTimes10 = memo(times10);

console.log(memoizedTimes10(10), 100);
console.log(memoizedTimes10(10), 100);
