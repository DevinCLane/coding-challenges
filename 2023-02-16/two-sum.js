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
// naive approach
const twoSum = (nums, target) => {
    // loop starting on i, then loop again within that starting i + 1, and if i + j = target, we found it
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9), [0,1])
console.log(twoSum([3,2,4], 6), [1,2])
console.log(twoSum([3,3], 6), [0,1])

// keep track of our already searched values using an object
const twoSum2 = (nums, target) => {
    // create a hashmap
    // looping over nums. if we have the complement of the current and target in our hashmap, return that
    // otherwise add the currently checked number to our hashmap
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        // store our current value
        let current = nums[i]
        // this is our needed value, the target - current will = the value that adds with current to = target
        let neededValue = target - current
        // if the needed value is in our map
        if (map[neededValue] !== undefined) {
            // return the indices of the two numbers
            return [map[neededValue], i]
        } else {
            // store the number and its index in our map
            map[current] = i
        }
    }
}

console.log(twoSum2([2,7,11,15], 9), [0,1])
console.log(twoSum2([3,2,4], 6), [1,2])
console.log(twoSum2([3,3], 6), [0,1])