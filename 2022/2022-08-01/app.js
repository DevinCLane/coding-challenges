/* 
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:

    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.

*/

const seriesSum = n => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 1 / (i * 3 + 1)
    }
    return sum.toFixed(2);
}

// test cases

console.log(seriesSum(1), "1.00")
console.log(seriesSum(2), "1.25")
console.log(seriesSum(3), "1.39")
console.log(seriesSum(4), "1.49")