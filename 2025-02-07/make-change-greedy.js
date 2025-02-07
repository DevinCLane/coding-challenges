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
 * @param {number} amount
 * @returns {number}
 */
const makeChange = (value) => {
    // greedy algorithm style means go for the locally optimal solution
    // sort the coins
    // if the biggest coin is less than the value
    // subtract the coin from the value, incremement the coin total
    // otherwise increment the counter and go to the next coin.
    coins.sort((a, b) => b - a);
    let i = 0;
    let coinTotal = 0;
    while (value > 0) {
        if (coins[i] <= value) {
            value -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
