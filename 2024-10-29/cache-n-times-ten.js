/* 
write a function that multiplies a number n times 10

then use an object to cache the results of the n times 10 function

then write a function that multiplies a number n times 10, but first checks if the result is already in the cache.

console.log("~~~task 1~~~");
console.log("times10 returns: ", times10(9));

console.log("~~~task 2~~~");
console.log("task 2 calculated value: ", memoTimes10(9)); // calculated
console.log("task 2 cached value: ", memoTimes10(9)); // cached
*/

const times10 = (n) => n * 10;

const cache = {};

const memoTimes10 = (n) => {
    if (n in cache) {
        console.log("fetching from cache...");
        return cache[n];
    } else {
        console.log("calculating result...");
        let result = times10(n);
        cache[n] = result;
        return result;
    }
};

console.log("~~~task 1~~~");
console.log("times10 returns: ", times10(9));

console.log("~~~task 2~~~");
console.log("task 2 calculated value: ", memoTimes10(9)); // calculated
console.log("task 2 cached value: ", memoTimes10(9)); // cached
