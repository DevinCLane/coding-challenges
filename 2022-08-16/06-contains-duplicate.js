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
Output: true */

/* 
parameters: integery array 
return: true if any value appears twice, false if not
*/


const containsDuplicateElegant = nums => {
    const numsSet = new Set();
    for (const i of nums) {
        if (numsSet.has(i)) {
            return true;
        } else numsSet.add(i);
    }
    return false;
}

console.log(containsDuplicateElegant([1,1,1,3,3,4,3,2,4,2]), true)
console.log(containsDuplicateElegant([1,3,4,2]), false)

const containsDuplicateMoreElegant = nums => {
    // make a new Set from `nums`
    // if they aren't equal in length, then that means original `nums` contains extras
    return new Set(nums) !== nums.length
}