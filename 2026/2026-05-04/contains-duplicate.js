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

create a set
if the set length !== the array length, true otherwise false
*/

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 3]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);

function containsDuplicate2(nums) {
    const cache = {};
    for (const num of nums) {
        if (num[cache] !== undefined) {
            return true;
        } else {
            cache[num] = true;
        }
    }
    return false;
}

console.log(containsDuplicate2([1, 2, 3, 3]), true);
console.log(containsDuplicate2([1, 2, 3, 4]), false);
