/* 
solve the make change problem using brute force and recursion
*/

const coins = [5, 10, 25];
const makeChange = (value) => {
    // base case: if value === 0 return 0
    if (value === 0) return 0;
    // set minimum coins variable
    let minCoins;
    // for each on the coins
    coins.forEach((coin) => {
        // if value - coin >= 0
        if (value - coin >= 0) {
            // let currmin coins = make change recursive call on value - coin
            let currMinCoins = makeChange(value - coin);
            // if min coins is undefined or currmincoins < min coins
            if (minCoins === undefined || currMinCoins < minCoins) {
                // min coins = currmincoins
                minCoins = currMinCoins;
            }
        }
    });
    // return curr min coins + 1
    return minCoins + 1;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
