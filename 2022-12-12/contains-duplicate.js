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

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

*/

const containsDuplicate = nums => {
    // a Set from nums would be if every element is distinct => false
    // therefore if the Set of nums === nums, then this would be false, otherwise true
    const set = new Set(nums)
    return set.size === nums.length ? false : true;
}

// use a hash map instead

const containsDuplicateHash = nums => {
    const hashMap = {}
    for (const i of nums) {
        if (hashMap[i]) {
            return true
        } else {
            hashMap[i] = true;
        }
    }
    return false;
}



console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
console.log(containsDuplicate([1,2,3,4]), false)
console.log(containsDuplicate([1,2,3,1]), true)