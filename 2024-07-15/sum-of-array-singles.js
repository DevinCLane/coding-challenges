/* 
Sum of Array singles

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once. For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)

https://www.codewars.com/kata/59f11118a5e129e591000134
*/

const sumArraySingles = (arr) => {
    // which numbers occur only once
    return arr.reduce(
        (acc, curr) =>
            arr.indexOf(curr) === arr.lastIndexOf(curr) ? acc + curr : acc,
        0
    );
};

console.log(sumArraySingles([4, 5, 7, 5, 4, 8]), 15);
console.log(sumArraySingles([9, 10, 19, 13, 19, 13]), 19);
console.log(sumArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(sumArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(sumArraySingles([5, 10, 19, 13, 10, 13]), 24);

const sumArraySingles2 = (arr) => {
    // use a map, then the key can be a number
    const counts = new Map();
    let sum = 0;

    // loop over the array
    for (const num of arr) {
        // set items in the map
        // if we already have a number, add to it, or get 0, then add 1 to it if it exists
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    // loop over the counts map
    for (const [num, count] of counts) {
        // if the count is 1, add it to the sum
        if (count === 1) sum += num;
    }

    return sum;
};

const sumArraySingles3 = (arr) => {
    return arr.reduce(
        (acc, curr) =>
            arr.indexOf(curr) === arr.lastIndexOf(curr) ? acc + curr : acc,
        0
    );
};

console.log(sumArraySingles3([4, 5, 7, 5, 4, 8]), 15);
console.log(sumArraySingles3([9, 10, 19, 13, 19, 13]), 19);
console.log(sumArraySingles3([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(sumArraySingles3([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(sumArraySingles3([5, 10, 19, 13, 10, 13]), 24);

const sumArraySingles4 = (arr) => {
    const counts = new Map();
    let sum = 0;

    for (const num of arr) {
        counts.set(num, counts.get(num) + 1 || 1);
    }

    for (const [num, count] of counts) {
        if (count === 1) sum += num;
    }

    return sum;
};

console.log(sumArraySingles4([4, 5, 7, 5, 4, 8]), 15);
console.log(sumArraySingles4([9, 10, 19, 13, 19, 13]), 19);
console.log(sumArraySingles4([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(sumArraySingles4([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(sumArraySingles4([5, 10, 19, 13, 10, 13]), 24);
