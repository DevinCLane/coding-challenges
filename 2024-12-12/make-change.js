/* 
write a function makeChange that returns an integer that represents the least number of coins that add up to an amount
where the amount is always divisible by 5

coin values are 5, 10, 25

ex: input: 40, result: 3 (25, 10, 5)
ex: input: 25, result: 2 (25, 10)
*/

// the greedy algorithm solution
const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
};

console.log(makeChange([5, 10, 25], 50), "expect 2 coins");
