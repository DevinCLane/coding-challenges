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
    // place the integers and their count in here
    const hash = {};
    // go through the array
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        // if there's nothing there, add a 1
        if (!hash[current]) {
            hash[current] = 1
        } else {
            // if hash[current] already exists, that means that our number is going to be over 1
            // therefore return true and we're done
            return true;
        }
    }
    // if we never hit the hash[current] > 1 condition, then it's false because
    // every value has only occurred once. 
    return false;
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
console.log(containsDuplicate([1,2, 3, 4, 5]), false)
