/* 

*/

const coins = [10, 6, 1];

const memo = (cb) => {
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

const makeChange = (c) => {
    if (cache[c]) return cache[c];

    let minCoins = -1;
    coins.forEach((coin) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
};

console.log(makeChange(12));
