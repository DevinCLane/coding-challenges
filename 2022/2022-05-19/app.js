/* 
https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)
*/

/* 
My notes:
Parameters: array of integers, target number
Returns: array containing two indices that represent two numbers that when added together, equal the target
Example: [1,2,3], 4 => [0, 2]
*/

function twoSum(numbers, target) {
    // search for numbers that add up to target
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
}

// tests
console.log(twoSum([1,2,3], 4), [0,2]);
console.log(twoSum([1234,5678,9012], 14690), [1,2]);
console.log(twoSum([2,2,3], 4), [0,1]);