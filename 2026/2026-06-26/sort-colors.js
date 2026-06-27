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

is this a partition problem?
is this a two pointer problem?
if you put everything red to the left, everything blue to the right, will the white be in the middle?
*/

/**
 *
 * @param {number[]} nums
 */
function sortColors(nums) {
    let left = 0,
        i = 0,
        right = nums.length - 1;

    console.log("start", nums.slice());

    while (i <= right) {
        console.log("\n--- loop start ---");
        console.log({
            nums: nums.slice(),
            left,
            i,
            right,
            current: nums[i],
        });
        if (nums[i] === 0) {
            console.log(`found a 0 at i=${i}. swap with left=${left}`);
            [nums[left], nums[i]] = [nums[i], nums[left]];
            console.log(`after swap, ${nums.slice()}`);
            left++;
            i++;
            console.log("move left and i", { left, i, right });
        } else if (nums[i] === 1) {
            console.log(`found 1 at i=${i}. it's already in the middle`);
            i++;
            console.log(`move i:`, { left, i, right });
        } else {
            console.log(`found 2 at i=${i}, swap with right=${right}`);
            [nums[right], nums[i]] = [nums[i], nums[right]];
            console.log(`after swap`, nums.slice());
            right--;
            // do NOT increment i here because you have swapped i with the right value
            // ...which is unknown, therefore it hasn't been checked yet
            // you really have to know what you're moving and where, and get visibility into this
            console.log("move the right only:", { left, i, right });
            console.log("don't move i because the swapped-in value is unknown");
        }
    }
    console.log("\n done", nums.slice());
    return nums;
}

console.log(sortColors([1, 2, 0]));
// console.log(sortColors([1, 0, 1, 2]), [0, 1, 1, 2]);
// console.log(sortColors([2, 1, 0]), [0, 1, 2]);
