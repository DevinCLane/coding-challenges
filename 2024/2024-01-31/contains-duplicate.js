/* 
Contains Duplicate

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

const containsDuplicate = (nums) => {
    const numsMap = {};
    // create a hashmap
    for (const int of nums) {
        // if the hashmap already contains the number, it's true
        if (numsMap[int]) {
            return true;
        } else {
            // otherwise add the number to the hashmap
            numsMap[int] = 1;
        }
    }
    // return false if we made it through the whole array without hitting our true condition
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
