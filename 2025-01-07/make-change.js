/* 

write a function makeChange that returns an integer that represents the least number of coins that add up to an amount
where the amount is always divisible by 5

coin values are 5, 10, 25

ex: input: 40, result: 3 (25, 10, 5)
ex: input: 25, result: 1 (25)

do this in the greedy algorithm style.

note: this is not always the most optimal solution, and it's very hard to prove that it's the most optimal solution. In an interview setting, do a brute force solution first

greedy algorithm style means to just take the locally optimal solution: so go from the smallest coin
*/

const coins = [5, 10, 25];

const makeChange = (coins, amount) => {
    // sort largest to smallest
    coins.sort((a, b) => b - a);
    // set a result variable => coinTotal
    let coinTotal = 0;
    // set a counter variable => i = 0
    let i = 0;
    // while amount > 0 (we are going to subtract as we go)
    while (amount > 0) {
        // if (coin[i] <= amount) then subtract coins[i] from amount, and increment coinTotal
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
            // otherwise increment i
        } else {
            i++;
        }
    }
    // return coinTotal
    return coinTotal;
};

console.log(makeChange(coins, 40), 3);
console.log(makeChange(coins, 25), 1);