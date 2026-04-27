/* 
solve the make change problem using brute force and recursion
*/

const coins = [5, 10, 25];

const makeChange = (value) => {
    // base case if value === 0 return 0
    if (value === 0) return 0;
    // initialize minCoins
    let minCoins;
    // for each loop on coins
    coins.forEach((coin) => {
        // if the value minus the coin is greater than or equal to 0
        if (value - coin >= 0) {
            // let current min coins = makeChange(value - coin)
            let currMinCoins = makeChange(value - coin);
            // if min coins is undefined or curr min coins < min coins
            if (minCoins === undefined || currMinCoins < minCoins) {
                // min coins = curr min coins
                minCoins = currMinCoins;
            }
        }
        // return min coins + 1
    });
    return minCoins + 1;
};

console.log(makeChange(40), 3);
