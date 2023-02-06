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

const majorityElement = nums => {
    // create a hashmap
    // create a majority element variable
    // create a "number of times this number appears" variable -> count
    // iterate over the array
    // if the current number has the largest count, update the variables, this is our current winner
    // return the winner at the end
    const map = {}
    let majorityElement = null;
    let count = 0;
    for (const num of nums) {
        map[num] = map[num] + 1 || 1;
    }
    for (const num in map) {
        if (map[num] > count) {
            majorityElement = num;
            count = map[num]
        }
    }
    return +majorityElement;
}

console.log(majorityElement([3,2,3]), 3)
console.log(majorityElement([2,2,1,1,1,2,2]), 2)