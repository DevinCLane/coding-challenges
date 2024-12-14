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
    // sort the coins largest to smallest
    coins.sort((a, b) => b - a);
    // set coin total variable
    let coinTotal = 0;
    // set counter i variable
    let i = 0;

    // while the amount is greater than 0
    while (amount > 0) {
        // if the current coin is less than or equal to the amount
        if (coins[i] <= amount) {
            // subtract the coin value from the amount
            amount -= coins[i];
            // increase the coin counter
            coinTotal++;
        } else {
            // else increment i
            i++;
        }
    }
    // return the coint total
    return coinTotal;
};

console.log(makeChange(coins, 40), 3);
console.log(makeChange(coins, 25), 1);
