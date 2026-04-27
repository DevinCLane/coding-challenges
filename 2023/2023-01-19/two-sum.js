/* 
two sum:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

// brute force / naive
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9), [0, 1])
console.log(twoSum([3,2,4], 6), [1,2])
console.log(twoSum([3,3], 6), [0, 1])

// optimized with hash map
const twoSum2 = (nums, target) => {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        // this is our current value
        let current = nums[i]
        // the value that we need is target - current
        let neededValue = target - current
        // does the needed value exist in our hash map already? as in, have we already seen this?
        if (map[neededValue] !== undefined) {
            // if so return the indices
            return [map[neededValue], i]
        } else {
            // otherwise, add the current value to our hash map, storing its index
            map[current] = i
        }
    }
}

console.log(twoSum2([2,7,11,15], 9), [0, 1])
console.log(twoSum2([3,2,4], 6), [1,2])
console.log(twoSum2([3,3], 6), [0, 1])