/* 
solve the make change problem using brute force and recursion

how many can add up to 40
*/

const coins = [10, 6, 1];

/**
 *
 * @param {number} value
 * @returns {number}
 */
const makeChange = (value) => {
    // base case--if the value goes down to 0, return 0
    if (value === 0) return 0;
    // min coins for the equation we are tracking
    let minCoins;
    // loop over the collection of coins
    for (const coin of coins) {
        // if the total value - current coin is >= 0, we are still in business
        if (value - coin >= 0) {
            // the current min coins is the recursive call to the value - the current coin
            let currMinCoins = makeChange(value - coin);
            // if minCoins is undefined this means we hit the base case and we've hit the end of our calculations
            // or if the currMinCoins is less than the min coins, we also found a better scenario
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    }
    // add the current iteration of coins
    return minCoins + 1;
};

console.log(makeChange(12), 2);
