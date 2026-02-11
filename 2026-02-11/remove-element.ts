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

// loop over the array
// splice at the position
// return the resultant array
// O(n^2) time - splice is O(n), and you could do it O(n) times
function removeElement(nums: number[], val: number) {
    let index = 0;
    while (index < nums.length) {
        if (nums[index] === val) {
            nums.splice(index, 1);
        } else {
            index++;
        }
    }
    return nums.length;
}

// console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// two pointers with overwrite
// k and n
// if k !== n
// swap them
// otherwise increment k
function removeElement2(nums: number[], val: number) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        // if the current value isn't val, swap it to be before
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
        // if nums[i] === val
        // i++
        // k stays in the same place, this will get it replaced
    }
    return k;
}

console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
