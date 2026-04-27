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
    // brute force
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
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
    const numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;
        if (numsMap[complement] !== undefined) {
            return [numsMap[complement], i];
        } else {
            numsMap[current] = i;
        }
    }
    return []; // no solution found
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
    // with a Map
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;
        if (numsMap.has(complement)) {
            return [numsMap.get(complement), i];
        } else {
            numsMap.set(current, i);
        }
    }
    return [];
};

console.log(twoSum3([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum3([3, 2, 4], 6), [1, 2]);
console.log(twoSum3([3, 3], 6), [0, 1]);

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

const twoSum4 = (nums, target) => {
    // two pointer solution
    const sorted = [...nums].sort((a, b) => a - b);
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        const sum = sorted[left] + sorted[right];
        if (sum === target) {
            // check for the edge case such as [3, 3]
            // we'll just return [0, 0], instead of [0, 1]
            if (sorted[left] === sorted[right]) {
                return [
                    nums.indexOf(sorted[left]),
                    // search for the index of the right pointer value, but start from one further along than the value we just found.
                    // i.e., if we have [3, 3] and our target is 6, we got 0, the first value, then search for 3 but start from 1 index further along (so we don't just end up with [0, 0] as an answer, and instead have [0, 1])
                    nums.indexOf(sorted[right], nums.indexOf(sorted[left] + 1)),
                ];
            }
            return [nums.indexOf(sorted[left]), nums.indexOf(sorted[right])];
        } else {
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return [];
};

console.log(twoSum4([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum4([3, 2, 4], 6), [1, 2]);
console.log(twoSum4([3, 3], 6), [0, 1]);
