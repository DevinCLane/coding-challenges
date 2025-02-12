/* 
solve the make change problem using brute force and recursion

given an array of coins and a target value, 
what is the least number of coins you can use to add up to the value
*/

const coins = [5, 10, 25];

/**
 *
 * @param {number} value - the target value
 * @returns {number} - the number of coins used to add up to the target value
 */
const makeChange = (value) => {
    // base case
    if (value === 0) return 0;
    // min coins
    let minCoins;
    // loop over the coins
    for (const coin of coins) {
        // condition: if value - coin >= 0
        if (value - coin >= 0) {
            // current min coins = recursive call to value - coin
            let currMinCoins = makeChange(value - coin);
            // if min coins is undefined or currmin coins is less than min coins
            if (minCoins === undefined || currMinCoins < minCoins) {
                // min coins = currmincoins
                minCoins = currMinCoins;
            }
        }
    }
    // return min coins + 1
    return minCoins + 1;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
