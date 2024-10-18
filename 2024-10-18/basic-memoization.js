// write a function to multiply a number n times 10
const times10 = (n) => n * 10;

console.log("~~~task 1~~~");
console.log("times10 returns: ", times10(9));

// use an object to cache the results of the times10 function

const cache = {};

const memoTimes10 = (n) => {
    if (n in cache) {
        return cache[n];
    } else {
        let result = times10(9);
        cache[n] = result;
        return result;
    }
};

console.log("~~~task 2~~~");
console.log("task 2 calculated value: ", memoTimes10(9)); // calculated
console.log("task 2 cached value: ", memoTimes10(9)); // cached
