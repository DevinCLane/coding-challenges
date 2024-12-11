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

const binarySearch = (nums, target) => {
    if (
        !Array.isArray(nums) ||
        nums.length === 0 ||
        typeof target !== "number"
    ) {
        return -1;
    }
    let start = 0,
        end = nums.length - 1;
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
