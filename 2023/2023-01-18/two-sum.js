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

// naive approach / brute force -- nested for loops
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
console.log(twoSum([3,2,4], 6), [1, 2])
console.log(twoSum([3,3], 6), [0, 1])

// slightly optimized naive approach => sort then nested for loops
const twoSum2 = (nums, target) => {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum2([2,7,11,15], 9), [0, 1])
console.log(twoSum2([3,2,4], 6), [1, 2])
console.log(twoSum2([3,3], 6), [0, 1])

// more optimized approach => hash map
const twoSum3 = (nums, target) => {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i]
        const neededValue = target - currentValue
        if (map[neededValue] !== undefined) {
            return [map[neededValue], i]
        } else {
            map[currentValue] = i;
        }
    }
}

console.log(twoSum3([2,7,11,15], 9), [0, 1])
console.log(twoSum3([3,2,4], 6), [1, 2])
console.log(twoSum3([3,3], 6), [0, 1])