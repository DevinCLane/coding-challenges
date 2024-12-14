/* 
write a function makeChange that returns an integer that represents the least number of coins that add up to an amount
where the amount is always divisible by 5

coin values are 5, 10, 25

ex: input: 40, result: 3 (25, 10, 5)
ex: input: 25, result: 2 (25, 10)

do this in the greedy algorithm style.

note: this is not always the most optimal solution, and it's very hard to prove that it's the most optimal solution. In an interview setting, do a brute force solution first
*/

const coins = [5, 10, 25];

const makeChange = (coins, amount) => {
    // sort the coins in reverse order
    coins.sort((a, b) => b - a);
    // set up coin counter
    let coinCount = 0;
    // set up counter i
    let i = 0;
    // while amount is greater than 0
    while (amount > 0) {
        // if the current coin is less than or equal to the amount
        if (coins[i] <= amount) {
            // subtract the coin from the amount
            amount -= coins[i];
            // increment the coin counter
            coinCount++;
        } else {
            // otherwise increment the counter to check the next coin
            i++;
        }
    }
    // return the coin count
    return coinCount;
};

console.log(makeChange(coins, 40), 3);
console.log(makeChange(coins, 25), 1);
