/* 
Contains duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
*/

const containsDuplicate = (nums) => {
    // create a hashmap
    // if anything appears twice return true, otherwise false
    const hashMap = {};

    for (const int of nums) {
        if (hashMap[int]) {
            return true;
        } else {
            hashMap[int] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3]), false);
console.log(containsDuplicate([1, 2, 3, 2]), true);
