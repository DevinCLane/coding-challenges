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


left pointer
right pointer
i

if its 0, put at left pointer
left++
if its 2 put at right pointer
right--

overall algo:

left pointer, 0
i, 0
right pointer, nums.length - 1
while i <= right
if the i position is a 0
swap the nums[i] into the left pointer, and swap the left pointer el into the i position
increment left

if it's a 2
swap the nums[i] into the right position
decrement right
decrement i

increment i
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
