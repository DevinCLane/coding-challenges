/* 
solve the make change problem using brute force and recursion
*/

const coins = [5, 10, 25];

const makeChange = (value) => {
    // base case
    if (value === 0) return 0;
    let minCoins;
    // loop over coins
    for (const coin of coins) {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    }
    return minCoins + 1;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
