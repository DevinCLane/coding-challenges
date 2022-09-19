/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const containsDuplicate = nums => {
    // sort the array so that our duplicates will show up faster
    // e.g., [1, 2, 3, 4, 5, 1] becomes [1, 1, 2, 3, 4, 5]
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 1]), true)
console.log(containsDuplicate([1, 2, 3, 4, 5]), false)

const containsDuplicateSet = nums => {
    // a set has only unique values
    const set = new Set(nums);
    // if the set of unique values isn't the same as the array, that means the array is longer, and thus has duplicate values. therefore we return true, otherwise false.
    return set.size !== nums.length;
}

console.log(containsDuplicateSet([1, 2, 3, 4, 5, 1]), true)
console.log(containsDuplicateSet([1, 2, 3, 4, 5]), false)