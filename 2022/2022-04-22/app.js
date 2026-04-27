// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// My notes:
// first, we create an empty array to store our result
// next, we want to go from n to 0, so we set our counter variable i to n (which is 5 in the test case)
// we then push i to the array and decrement i each time until i = 1 (in other words, run the loop as long as i > 0)
// we return the new array

const reverseSeq = n => {
    let array = [];
    for (i = n; i > 0; i--) {
        array.push(i);
    }
    return array;
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
