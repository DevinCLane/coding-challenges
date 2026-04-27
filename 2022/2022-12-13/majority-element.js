/* 
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

const majorityElement = nums => {
    // count occurances of each number in the array
    const map = {}
    for (const number of nums) {
        map[number] ? ++map[number] : map[number] = 1
    }
    let majorityElement = 0
    const majority = nums.length / 2
    for (const number in map) {
        if (map[number] > majority) {
            majorityElement = number;
        }
    }
    return majorityElement
    // take arr.length / 2
    // return the number that occurs more than arr.length / 2 times
}

console.log(majorityElement([3,2,3]), 3)
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)