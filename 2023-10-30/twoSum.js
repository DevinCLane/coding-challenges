/* 
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

// taking in an array of integers, and an integer target
// return an array of indices.

/* 
function twosum take in array and target
    loop i
        read each number
            loop j
                loop at i + 1, check if i and check if i + j === target
                    if it does, return [i, j]

*/

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);

const twoSum2 = (nums, target) => {
    // hash map
    // check if the value + its complement exists in the hash map
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        // this is our current value
        let current = nums[i];
        // this is the value we need. Its the complement of the target minus the current
        let neededValue = target - current;
        // if the needed value is in our map, then we return the indices of the two values
        // the needed value is calculate by subtacting the current from the target.
        // if the needed value is in our map, that means we have already seen it and don't need to count it all again.
        if (map[neededValue] !== undefined) {
            return [map[neededValue], i];
            // otherwise store in the object our current value and its index
        } else {
            map[current] = i;
        }
    }
};

console.log(twoSum2([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum2([3, 2, 4], 6), [1, 2]);
console.log(twoSum2([3, 3], 6), [0, 1]);
