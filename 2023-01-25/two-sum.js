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

// for loops /naive approach
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

// hash map
const twoSum2 = (nums, target) => {
    // create a hash map to store our previously checked values and their indices
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        // here's our current value
        let current = nums[i]
        // this is our needed value. subtract the target from the current to get its complement.
        let needed = target - current
        // if the needed value is in our hash map, then we found a match. return the index of that value, plus the current index
        if (hashMap[needed] !== undefined) {
            return [hashMap[needed], i]
            // otherwise add the current value and its index to our hash map
        } else {
            hashMap[current] = i 
        }
    }
}

console.log(twoSum2([2,7,11,15], 9), [0, 1])
console.log(twoSum2([3,2,4], 6), [1, 2])
console.log(twoSum2([3,3], 6), [0, 1])