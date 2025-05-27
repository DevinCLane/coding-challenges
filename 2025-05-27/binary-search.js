/* 
Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 
Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
https://leetcode.com/problems/binary-search/description/
*/

// binary search
/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} - index of target in the array nums
 */
function binarySearch(nums, target) {
    if (
        nums.length === 0 ||
        !Array.isArray(nums) ||
        typeof target !== "number"
    ) {
        return -1;
    }
    // left
    let left = 0,
        // right
        right = nums.length - 1;
    // while left < right
    while (left <= right) {
        // mid
        const mid = Math.floor((left + right) / 2);
        // if nums[mid] === target,
        if (nums[mid] === target) {
            // return mid
            return mid;
            // if nums[mid] > target
            /* 
            remember - if nums[mid] > target, that means that the number we just tested
            lands greater than the number we are targeting
            therefore we guessed higher than we want
            so we should throw away everything higher than our guess
            therefore we move right to mid - 1
            which throws away everything to the right
            which is higher than our target and thus not desired
            */
        } else if (nums[mid] > target) {
            // left = nums[mid] - 1
            right = mid - 1;
            // else right = nums[mid] + 1
        } else {
            left = mid + 1;
        }
    }
    // return -1
    return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
