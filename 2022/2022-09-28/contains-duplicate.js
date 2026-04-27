/* 
Solve Contains Duplicate: 
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

/* 
parameters: array of integers
return: true or false. true if we have repeating numbers, false if not
*/

const containsDuplicateBrute = nums => {
    // sort the array
    nums.sort((a, b) => a - b);
    // create two nested for loops
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // check if our pointers are equal
            if (nums[i] === nums[j]) {
                // if so return true
                return true;
            }
        }
    }
    // return false
    return false
}

console.log(containsDuplicateBrute([1, 2, 3, 4, 5]), false)
console.log(containsDuplicateBrute([1, 2, 3, 4, 5, 1]), true)

// using Set

const containsDuplicateSet = nums => {
    const set = new Set(nums);
    return set.size !== nums.length;
}
// create a set from the array nums
// if the Set === nums, false, otherwise it's true

console.log(containsDuplicateSet([1, 2, 3, 4, 5]), false)
console.log(containsDuplicateSet([1, 2, 3, 4, 5, 1]), true)