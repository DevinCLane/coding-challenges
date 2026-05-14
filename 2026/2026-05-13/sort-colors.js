/* 
12. Sort Colors
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

left pointer
i
right pointer

if 0, swap i with left
if 2, swap i with right

make sure to not increment i after swapping with the right, just in case we have a 0 in that place
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
            [nums[right], nums[i]] = [nums[i], nums[right]];
            right--;
            i--;
        }
        i++;
    }
    return nums;
}
console.log(sortColors([1, 0, 1, 2]), [0, 1, 1, 2]);
