/* 

write a function makeChange that returns an integer that represents the least number of coins that add up to an amount
where the amount is always divisible by 5

coin values are 5, 10, 25

ex: input: 40, result: 3 (25, 10, 5)
ex: input: 25, result: 2 (25, 10)

note: this is not always the most optimal solution, and it's very hard to prove that it's the most optimal solution. do brute force first in an interview setting.
*/

const coins = [5, 10, 25];

const makeChange = (coins, amount) => {
    // sort coins by highest to lowest
    coins.sort((a, b) => b - a);
    // set a variable for the number of coins used
    let coinTotal = 0;
    // track a counter variable i
    let i = 0;
    // while the amount is still greater than 0
    while (amount > 0) {
        // if the coin is less than or equal to the amount,
        if (coins[i] <= amount) {
            // subtract the coin from the amount,
            amount -= coins[i];
            // incremement the coin counter variable
            coinTotal++;
            // otherwise move to the next coin
        } else {
            i++;
        }
    }
    // return the coin total
    return coinTotal;
};

console.log(makeChange(coins, 50), "expect 2 coins");
