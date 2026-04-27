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
    // sort the coins largest to smallest
    coins.sort((a, b) => b - a);
    // initializecoin total variable
    let coinTotal = 0;
    // initialize counter
    let i = 0;
    // while amount > 0
    while (amount > 0) {
        // if the coin is smaller than amount
        if (coins[i] <= amount) {
            // subtract the coin from amount
            amount -= coins[i];
            coinTotal++;
        } else {
            // otherwise increment the counter
            i++;
        }
    }
    return coinTotal;
};

console.log(makeChange(40), 3);
console.log(makeChange(25), 1);
