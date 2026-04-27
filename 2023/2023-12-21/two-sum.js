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
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
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
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum2 = (nums, target) => {
    // hash map
    const indices = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indices.hasOwnProperty(complement)) {
            return [indices[complement], i];
        } else {
            indices[nums[i]] = i;
        }
    }
    return "no solution found";
};

console.log(twoSum2([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum2([3, 2, 4], 6), [1, 2]);
console.log(twoSum2([3, 3], 6), [0, 1]);

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum3 = (nums, target) => {
    // with a javascript Map
    const indices = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indices.has(complement)) {
            return [indices.get(complement), i];
        } else {
            indices.set(nums[i], i);
        }
    }
};

console.log(twoSum3([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum3([3, 2, 4], 6), [1, 2]);
console.log(twoSum3([3, 3], 6), [0, 1]);

// two pointers approach

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum4 = (nums, target) => {
    const sorted = [...nums].sort((a, b) => a - b);

    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        const sum = sorted[left] + sorted[right];

        if (target === sum) {
            return [nums.indexOf(sorted[left]), nums.indexOf(sorted[right])];
        } else {
            if (target < sum) {
                right--;
            } else {
                left++;
            }
        }
    }
    return "no solution found";
};

console.log(twoSum4([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum4([3, 2, 4], 6), [1, 2]);
console.log(twoSum4([3, 3], 6), [0, 1]);
