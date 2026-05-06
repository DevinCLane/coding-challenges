/* 
7: 
Remove Element
You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.
After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.
Note:
The order of the elements which are not equal to val does not matter.
It is not necessary to consider elements beyond the first k positions of the array.
To be accepted, the first k elements of nums must contain only elements not equal to val.
Return k as the final result.
Example 1:
Input: nums = [1,1,2,3,4], val = 1

Output: [2,3,4]
Explanation: You should return k = 3 as we have 3 elements which are not equal to val = 1.
Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2

Output: [0,1,3,0,4]
Explanation: You should return k = 5 as we have 5 elements which are not equal to val = 2.
Constraints:
0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/

function removeElement(nums, val) {
    return nums.filter((el) => el !== val).length;
}

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

/* 
two pointers
if the current el === val, move one pointer ahead
swap the values
return the position of where the second pointer finishes
*/
function removeElement2(nums, val) {
    // the pointer keeps track of every val that is val, THEREFORE we get to replace it
    // with a value further down in nums that is NOT val
    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(
            `\n i is ${i} pointer is ${pointer} and nums[i] is ${nums[i]}`,
        );
        // if the current value isn't val
        if (nums[i] !== val) {
            console.log(`nums[i]: ${nums[i]} is NOT val: ${val}`);
            // take the current value, and put it in the pointers position
            console.log(
                `putting nums[i] ${nums[i]} into nums[pointer] ${nums[pointer]}`,
            );
            nums[pointer] = nums[i];
            console.log(
                `nums[pointer] is now ${nums[pointer]} and nums[i] is ${nums[i]}`,
            );
            // increment the pointer
            pointer++;
            console.log(`pointer is ${pointer}`);
        } else {
            // if the current value IS val, then we've passed it by
            console.log(`nums[i] ${nums[i]} IS val ${val}`);
            console.log(
                `pointer stays at ${pointer} and i will increment to ${i + 1}`,
            );
        }
    }
    return pointer;
}

console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
