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
 * given an input array, return true/false if any value appears more than once
 * @param {number[]} nums - input array
 * @returns {boolean} - true if there are duplicates, false if not
 */
const containsDuplicate = (nums) => {
    // cache
    const cache = {};
    // loop over array
    for (const num of nums) {
        // if current value is in the cache, return true
        if (num in cache) {
            return true;
        } else {
            // otherwise add current value to the cache
            cache[num] = true;
        }
    }
    // return false if we make it through all that
    return false;
};

console.log(containsDuplicate([1, 2, 3, 3]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);

const containsDuplicate2 = (nums) => {
    // loop over the nums
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    // loop inside loops to compare each number to the other number
    return false;
};

console.log(containsDuplicate2([1, 2, 3, 3]), true);
console.log(containsDuplicate2([1, 2, 3, 4]), false);
