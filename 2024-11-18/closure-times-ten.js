/* 
times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const timesTen = (n) => n * 10;

const closure = (cb) => {
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

const timesTenClosure = closure(timesTen);

console.log(timesTenClosure(9));
console.log(timesTenClosure(9));
