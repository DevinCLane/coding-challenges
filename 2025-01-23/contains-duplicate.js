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
    // loop over array
    // if i === last index of i, false, otherwise true
    let result = false;
    for (const num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) {
            result = false;
        } else result = true;
    }
    return result;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

const containsDuplicate2 = (nums) => {
    const cache = {};
    for (const num of nums) {
        if (num in cache) {
            return true;
        } else {
            cache[num] = true;
        }
    }
    return false;
};

console.log(containsDuplicate2([1, 2, 3, 1]), true);
console.log(containsDuplicate2([1, 2, 3, 4]), false);
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
