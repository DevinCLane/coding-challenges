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
 * @param {number[]} nums
 * @returns {boolean}
 */
const containsDuplicate = (nums) => {
    // set length
    // if set length === nums length then there are no duplicates, therefore false, otherwise true
    const set = new Set(nums);
    return set.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 3]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);

/**
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const containsDuplicate2 = (nums) => {
    // double nested loops
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate2([1, 2, 3, 3]), true);
console.log(containsDuplicate2([1, 2, 3, 4]), false);

/**
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const containsDuplicate3 = (nums) => {
    // cache to store values
    // if the value is in the cache, true, otherwise return false
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

console.log(containsDuplicate3([1, 2, 3, 3]), true);
console.log(containsDuplicate3([1, 2, 3, 4]), false);
