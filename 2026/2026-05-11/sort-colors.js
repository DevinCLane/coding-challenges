/* 
Sort Colors
You are given an array nums consisting of n elements where each element is an integer representing a color:
0 represents red
1 represents white
2 represents blue
Your task is to sort the array in-place such that elements of the same color are grouped together and arranged in the order: red (0), white (1), and then blue (2).
You must not use any built-in sorting functions to solve this problem.
Example 1:
Input: nums = [1,0,1,2]

Output: [0,1,1,2]
Example 2:
Input: nums = [2,1,0]

Output: [0,1,2]
Constraints:
1 <= nums.length <= 300.
0 <= nums[i] <= 2.
Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/

/**
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function sortColors(nums) {
    let i = 0,
        left = 0,
        right = nums.length - 1;
    while (i <= right) {
        if (nums[i] === 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
            i--;
        }
        i++;
    }
    return nums;
}

console.log(sortColors([1, 0, 1, 2]), [0, 1, 1, 2]);
console.log(sortColors([2, 1, 0]), [0, 1, 2]);
