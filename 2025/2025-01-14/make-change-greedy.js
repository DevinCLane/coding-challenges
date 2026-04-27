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

const makeChange = (coins, value) => {
    // coinTotal
    let coinTotal = 0;
    // i
    let i = 0;
    // sort the coins
    coins.sort((a, b) => b - a);
    // while coins[i] <= value
    while (value > 0) {
        if (coins[i] <= value) {
            // value -= coins[i]
            value -= coins[i];
            // coinTotal++
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
};

console.log(makeChange(coins, 40), 3);
console.log(makeChange(coins, 25), 1);
