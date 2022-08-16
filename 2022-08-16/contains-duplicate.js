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

/* 
we need to keep a hashmap of the # of times each value appears
e.g.
{
    '2': 1,
    '3': 2,
}
and if anything returns 2, then we return true
otherwise return false

parameters: array of integers
return: boolean
*/

const containsDuplicate = nums => {
    // create hashmap
    // for loop
    // store the number of times each value appears
    // if anything === 2, return true, else false
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (!hash[current]) {
            hash[current] = 1;
        } else {
            hash[current]++
        }
        if (hash[current] >= 2) {
            return true;
        }
    }
    return false; 
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
console.log(containsDuplicate([1,3,4,2]), false)