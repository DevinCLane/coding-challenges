/* 
1. Two Sum
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
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
    // nested loops
    // compared one number and the other number
    // if they add up to target, return i and j
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return -1;
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum2 = (nums, target) => {
    // create cache
    // look for the complement => current - target
    // if complement in cache, return indices
    // otherwise add current to cache
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;
        if (complement in cache) {
            return [cache[complement], i];
        } else {
            cache[current] = i;
        }
    }
    return -1;
};

console.log(twoSum2([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum2([3, 2, 4], 6), [1, 2]);
console.log(twoSum2([3, 3], 6), [0, 1]);
