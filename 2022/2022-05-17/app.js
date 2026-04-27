/* 
https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

/* 
PREP
Parameters: two integers, negative or positive, always integers.
Returns: one number, the sum of integers between them inclusive. if the two are equal, return one of them
Example: -2, 3: -2 + -1 + 0 + 1 + 2 + 3 = 3
*/

const getSum = (a, b) => {
    // if a === b, return a;
    let sum = 0;
    if (a === b) {
        return a;
    // if a < b loop starting at a, count each integer while <= b
    } else if (a < b) {
        while (a <= b) {
            sum += a
            a++
        }
    // if a > b loop starting at a, count each integer down while a >= b
    } else if (a > b) {
        while (a >= b) {
            sum += a;
            a--
        }
    } return sum

    
}

// test cases
console.log(getSum(0,-1),-1);
console.log(getSum(0,1),1);