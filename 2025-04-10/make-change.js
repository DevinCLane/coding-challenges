/*
write a function makeChange that returns an integer that represents the least number of coins that add up to an amount
where the amount is always divisible by 5

coin values are 5, 10, 25

ex: input: 40, result: 3 (25, 10, 5)
ex: input: 25, result: 1 (25)
ex: input: 10, result 1 (10)
ex: input: 15, result 2 (10)

do this in the greedy algorithm style.

note: this is not always the most optimal solution, and it's very hard to prove that it's the most optimal solution. In an interview setting, do a brute force solution first
*/

const coins = [5, 10, 25];
/**
 *
 * @param {number} input
 * @returns {number}
 */

const makeChange = (input) => {
    // make sure the input is divisible by 5
    // sort the coins
    coins.sort((a, b) => b - a);
    // total number of coins variable
    let coinTotal = 0;
    // counter variable
    let i = 0;
    // while input > 0
    while (input > 0) {
        // if the current coin is less than or equal to input
        if (coins[i] <= input) {
            // reduce input by the current coin
            input -= coins[i];
            // add one coin to coin total
            coinTotal++;
        } else {
            // otherwise move forward in the array
            i++;
        }
    }
    // return the total number of coins
    return coinTotal;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
console.log(makeChange(10), 1);
console.log(makeChange(15), 2);
