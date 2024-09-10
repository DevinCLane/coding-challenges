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

/**
 *
 * @param {number[]} nums - array of integers sorted in ascending order
 * @param {number} target - integer we are looking for within the nums array
 * @returns {number} - the index of the found target within the nums array
 */

const binarySearch = (nums, target) => {
    // account for edge cases - if it's not an array, if nums.length is 0, if target isn't an integer
    if (
        !Array.isArray(nums) ||
        nums.length === 0 ||
        typeof target !== "number"
    ) {
        return -1;
    }
    // start and end variables, start is 0, end it nums.length - 1
    let start = 0,
        end = nums.length - 1;
    // while loop: start <= end
    while (start <= end) {
        // mid variable = Math.floor((start + end) / 2)
        const mid = Math.floor((start + end) / 2);

        // if the target is mid return mid
        if (nums[mid] === target) {
            return mid;
            // if mid is greater than target, end = mid - 1
        } else if (nums[mid] > target) {
            end = mid - 1;
            // otherwise start = mid + 1
        } else {
            start = mid + 1;
        }
    }
    // otherwise return -1
    return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
