/* 
Majority Element

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

https://leetcode.com/problems/majority-element/
*/

const majorityElement = (nums) => {
    // create a hash map
    // store the occurances of each number
    // if you find any that is great than n / 2, return that number
    const map = {};
    for (const num of nums) {
        map[num] = map[num] + 1 || 1;
        if (map[num] > nums.length / 2) {
            return num;
        }
    }
};

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
