/* 
solve the make change problem using brute force and recursion
*/
const coins = [10, 6, 1];

const makeChange = (value) => {
    if (value === 0) return 0;
    let minCoins;
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
