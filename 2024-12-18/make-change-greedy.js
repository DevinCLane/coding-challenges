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

const makeChange = (amount) => {
    // sort the coins
    coins.sort((a, b) => b - a);
    // set coinTotal
    let coinTotal = 0;
    // set counter
    let i = 0;
    // while the amount is greater than 0
    while (amount > 0) {
        // if the current coin is greater than or equal to the amount
        if (coins[i] <= amount) {
            // amount -= coins[i]
            amount -= coins[i];
            // increment coin count
            coinTotal++;
        } else {
            // increment the counter to move to the next coin
            i++;
        }
    }
    return coinTotal;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
