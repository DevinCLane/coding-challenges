/* 
solve the make change problem using brute force and recursion
*/

const coins = [5, 10, 25];

const makeChange = (value) => {
    if (value === 0) return 0;
    // set up minimum coins variable (this is the result)
    let minCoins;
    // run a for each on each element of the coins array
    coins.forEach((coin) => {
        // if the target value minus current coin is greater than or equal to 0
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
};

console.log(makeChange(50), 2);
