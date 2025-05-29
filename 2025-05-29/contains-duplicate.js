/* 
2: 
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
 * time complexity: O(n) - single pass through the array
 * space complexity: O(n) - storing up to n elements in the hash map
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
    const map = {};
    for (const num of nums) {
        if (num in map) {
            return true;
        } else {
            map[num] = true;
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 3]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);

// hash map
// if num in map return false
// otherwise add to hash map
// return true

/**
 * time complexity: O(n) - creating a set requires checking each element
 * space complexity: O(n) - storing up to n elements in the set
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate2(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
}

console.log(containsDuplicate2([1, 2, 3, 3]), true);
console.log(containsDuplicate2([1, 2, 3, 4]), false);

// naive approach

/**
 * time complexity: O(n^2) - nested loops comparing each element
 * spacey complexity: O(1) - no extra data structures, just variables
 * @param {number[]} nums
 * @returns {boolean}
 */
function conatinsDuplicate3(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
