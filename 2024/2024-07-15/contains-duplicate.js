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
    const map = {};
    for (const num of nums) {
        if (map[num]) {
            return true;
        } else {
            map[num] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1], true));
console.log(containsDuplicate([1, 2, 3, 4], false));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true));

const containsDuplicate2 = (nums) => {
    // if the set (which has no duplicates) is not equal to the length of the array, that means that there are more than one of an item in the array, meaning there are duplicates, therefore we return true
    // if the set is equal to the array length, then there are no duplicates, therefore the condition is false
    return new Set(nums).size !== nums.length;
};
