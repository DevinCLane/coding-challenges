/* 
times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const times10 = (n) => n * 10;

const memo = (cb) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            console.log("fetching from cache", n);
            return cache[n];
        } else {
            console.log("calculating result", n);
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const closure = memo(times10);
console.log(closure(9));
console.log(closure(9));
