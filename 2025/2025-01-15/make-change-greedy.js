/* 
write a function makeChange that returns an integer that represents the least number of coins that add up to an amount
where the amount is always divisible by 5

coin values are 5, 10, 25

ex: input: 40, result: 3 (25, 10, 5)
ex: input: 25, result: 1 (25)

do this in the greedy algorithm style.

note: this is not always the most optimal solution, and it's very hard to prove that it's the most optimal solution. In an interview setting, do a brute force solution first
*/

const coins = [5, 10, 25];

/**
 *
 * @param {number} amount - the value that we are trying to create
 * @returns {number} - the number of coins needed to create that value
 */
const makeChange = (amount) => {
    // reverse sort the coins
    coins.sort((a, b) => b - a);
    // set up the coinTotal variable - this is the result
    let coinTotal = 0;
    // intialize counter i = 0
    let i = 0;
    // while amount > 0
    while (amount > 0) {
        // if (coins[i] <= amount)
        if (coins[i] <= amount) {
            // subtract the current coin from the amount
            amount -= coins[i];
            // increment the coinTotal
            coinTotal++;
            // otherwise increment i to go to the next coin
        } else {
            i++;
        }
    }
    // return the coinTotal
    return coinTotal;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
