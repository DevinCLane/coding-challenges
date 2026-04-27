/* 
two sum:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
*/

/**
 *
 * @param {Array} num
 * @param {number} target
 * @returns {Array}
 */

// brute force with nested for loops: O(n^2) complexity
const twoSum = (num, target) => {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);

/**
 *
 * @param {Array} num
 * @param {number} target
 * @returns {Array}
 */

const twoSum2 = (num, target) => {
    // create a hash map to store values we've checked
    // looking for the complement number: target - current = complement: is this in the hash map? if so return, if not add to hash map
    const map = {};
    for (let i = 0; i < num.length; i++) {
        const neededValue = target - num[i];
        if (map[neededValue] !== undefined) {
            return [map[neededValue], i];
        } else {
            map[num[i]] = i;
        }
    }
};

console.log("~~hash map~~");
console.log(twoSum2([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum2([3, 2, 4], 6), [1, 2]);
console.log(twoSum2([3, 3], 6), [0, 1]);
