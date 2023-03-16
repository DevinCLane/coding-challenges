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

// make a hash map counting the number of times each element occurs
// loop through that map with a variable for the max element, update it as you go

const majorityElement = (nums) => {
    const map = {};
    for (const num of nums) {
        map[num] = ++map[num] || 1;
        if (map[num] > nums.length / 2) {
            return num;
        }
    }
};

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
