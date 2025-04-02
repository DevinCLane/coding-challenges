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
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} - index of the target number
 */
const binarySearch = (nums, target) => {
    // edge cases
    if (
        !Array.isArray(nums) ||
        typeof target !== "number" ||
        nums.length === 0
    ) {
        return -1;
    }

    // start
    let start = 0;
    // end
    let end = nums.length - 1;
    // while start is less than end
    while (start <= end) {
        // calculate mid
        const mid = Math.floor((start + end) / 2);
        // if nums[mid] is the target, return
        if (nums[mid] === target) {
            return mid;
            // if it's greater than target, cut off from mid to end, and exclude mid with - 1
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            // if it's less than target, cut off from start to mid, excluding mid with + 1
            start = mid + 1;
        }
    }
    // return -1 if it finds nothing
    return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
