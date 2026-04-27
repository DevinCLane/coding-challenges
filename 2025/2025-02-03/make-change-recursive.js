/* 
solve the make change problem using brute force and recursion
*/

const coins = [5, 10, 25];
const makeChange = (value) => {
    // base case
    if (value === 0) return 0;
    // min coins
    let minCoins;
    // loop over coins
    for (const coin of coins) {
        // is the coin less than or equal value
        if (value - coin >= 0) {
            // current min coins is a recursive call
            let currMinCoins = makeChange(value - coin);
            // if min coins is undefined or curr min coins is less than min coins
            if (minCoins === undefined || currMinCoins < minCoins) {
                // assign currmin coins to min coins
                minCoins = currMinCoins;
            }
        }
    }
    // return min coins + 1
    return minCoins + 1;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
