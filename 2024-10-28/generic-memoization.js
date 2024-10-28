/* 
Make your memo function generic and accept the times10 function as a callback rather than defining
the n * 10 logic inside the if/else or pulling it in from the global scope

protip: take advantage of the fact that parameters are saved in the closure as well,
just like the cache from the previous example
*/

const times10 = (n) => n * 10;

const genericMemo = (cb) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};
