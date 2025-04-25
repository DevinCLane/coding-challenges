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

[2, 5, 3, 6], 7
[0, 1]

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
*/

// function twoSum(nums, target)
function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;
        if (map[complement] !== undefined) {
            return [map[complement], i];
        } else {
            map[current] = i;
        }
    }
    return -1;
}

console.log(twoSum([0, 1, 5, 4], 9), [2, 3]);
