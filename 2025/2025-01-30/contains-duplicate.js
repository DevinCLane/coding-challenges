/* 
Contains Duplicate

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true


Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/

/**
 *
 * @param {number[]} nums - the array we are analyzing
 * @returns {boolean} = true/false if the array contains any duplicates
 */
const containsDuplicate = (nums) => {
    // naive approach
    // loop within a loop
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // if arr[i] === arr[j] return false
            if (i !== j && nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 3]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);

/**
 *
 * @param {number[]} nums - the array we are analyzing
 * @returns {boolean} = true/false if the array contains any duplicates
 */
const containsDuplicate2 = (nums) => {
    // cache
    const cache = {};
    for (const num of nums) {
        if (num in cache) {
            return true;
        } else {
            cache[num] = true;
        }
    }
    return false;
};

console.log(containsDuplicate2([1, 2, 3, 3]), true);
console.log(containsDuplicate2([1, 2, 3, 4]), false);
