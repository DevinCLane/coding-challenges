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

function majorityElement(nums) {
    // create a hash map
    // which element occurs more than n / 2 times (or which is the most frequent element)
    const map = {}
    let maxNum = null
    let numCount = 0
    for (const num of nums) {
        map[num] = ++map[num] || 1
    }
    for (const num in map) {
        if (map[num] > nums.length / 2) {
            maxNum = num
            numCount = map[num]
        }
    }
    return +maxNum
}

console.log(majorityElement([2,2,1,1,1,2,2]), 2)
console.log(majorityElement([3,2,3]), 3)