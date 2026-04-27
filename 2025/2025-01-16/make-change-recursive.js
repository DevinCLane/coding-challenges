/* 
solve the make change problem using brute force and recursion
*/

const coins = [5, 10, 25];

const makeChange = (value) => {
    // base case if value is 0 return 0
    if (value === 0) return 0;
    // for of loop on coins
    let minCoins;
    for (const coin of coins) {
        // if value - coin >= 0
        if (value - coin >= 0) {
            // currmincoins = recursive call on makechange(value - coin)
            let currMinCoins = makeChange(value - coin);
            // if minCoins === undefined or currmincoins < min coins
            if (minCoins === undefined || currMinCoins < minCoins) {
                // mincoins = currmincoins
                minCoins = currMinCoins;
            }
        }
    }
    // return mincoins + 1
    return minCoins + 1;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
