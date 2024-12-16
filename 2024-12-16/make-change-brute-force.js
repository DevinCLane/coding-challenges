/* 
solve the make change problem using brute force and recursion
*/

const makeChange = (coins, value) => {
    // base case, if the value is 0, return 0
    if (value === 0) return 0;
    // set up our min coins variable
    let minCoins;
    // loops over coins array
    for (const coin of coins) {
        // if the value - coin is greater than or equal to 0
        if (value - coin >= 0) {
            // set a current min coins variable to = the recursive call of make change with the value - the coin
            let currMinCoins = makeChange(coins, value - coin);
            // if minimum coins is undefined (this means in our recursive call,
            // we have hit the base case and therefore never initialize mincoins
            // (mincoins is declared but not initialized, thus it is undefined)
            // the 0 returns from that point in the recursive function call
            // (as the value gets recreated each time))
            // or the current minimum coins is less than the min coins
            if (minCoins === undefined || currMinCoins < minCoins) {
                // set the min coins to the current minimum coins
                minCoins = currMinCoins;
            }
        }
    }
    //
    return minCoins + 1;
};

const coins = [5, 10, 25];
console.log(makeChange(coins, 50), 2);
console.log(makeChange(coins, 40), 3);
