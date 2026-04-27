/* 
solve the make change problem using brute force and recursion
[5, 10, 25]
*/

const coins = [5, 10, 25];
// function amount
function makeChange(value) {
    // base case
    if (value === 0) return 0;
    // min coins varible
    let minCoins;
    // loop over coins
    for (const coin of coins) {
        // if the value - coin >= 0
        if (value - coin >= 0) {
            // the current mincoins = recurisve call on min coins of value - coin
            let currMinCoins = makeChange(value - coin);
            // if mincoins is undefined that means we are popping back off from the stack
            // we are coming back from the recursive calls and aren't in the first run of the function
            // or if the currMinCoins < minCoins
            // reassign minCoins to the lower value or the current minCoins
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    }
    // return minCoins + 1,
    // +1 because we just did one coin through this area of the function
    return minCoins + 1;
}

console.log(makeChange(40), 3);
console.log(makeChange(15), 2);
