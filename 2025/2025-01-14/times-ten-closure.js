/* 

times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const timesTen = (n) => n * 10;

const closure = (cb) => {
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

const timesTenClosure = closure(timesTen);
console.log(timesTenClosure(10), 100);
console.log(timesTenClosure(10), 100);
