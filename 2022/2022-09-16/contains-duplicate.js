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

// first we brute force with two pointers
const containsDuplicateBrute = nums => {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false;
}

console.log(containsDuplicateBrute([1, 1, 1, 3, 4]), true)
console.log(containsDuplicateBrute([1, 2, 3, 4]), false)

// doing it with a Set will be faster

const containsDuplicateSet = nums => {
    // a set only contains unique characters
    const set = new Set(nums)
    // if the size of the set is the size of the array, this means
    // that the array has all unique characters
    // according to our prompt, this will be false.
    // we will return true if the array has more characters than the set, i.e., that members in the array repeat more than once.
    return set.size !== nums.length
}

console.log(containsDuplicateSet([1, 1, 1, 3, 4]), true)
console.log(containsDuplicateSet([1, 2, 3, 4]), false)
