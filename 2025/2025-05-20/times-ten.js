/* 
times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const closure = (cb) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            const result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const timesTen = (n) => n * 10;

const timesTenMemo = closure(timesTen);

console.log(timesTenMemo(2));
console.log(timesTenMemo(3));
