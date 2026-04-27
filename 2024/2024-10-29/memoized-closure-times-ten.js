/* 
times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const times10 = (n) => n * 10;

const memoClosureTimes10 = () => {
    const cache = {};
    return (n) => {
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
};

console.log(times10(9), "expect 90");
const closure = memoClosureTimes10();
console.log(closure(9), "expect 90");
console.log(closure(9), "expect 90");
