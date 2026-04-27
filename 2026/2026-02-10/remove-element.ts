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

// create an index
// while index < nums.length
// if nums[index] === val, splice (index, 1)
// otherwise increment index
// return nums.length
/**
 * time complexity: O(n^2) where n is the length of nums, each splice is O(n) and it could be called up to O(n) times
 * space: O(1): modifies in place
 */
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

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

/**
 * in-place two pointer overwrite
 */
function removeElement2(nums: number[], val: number) {
    // keep track of pointer
    let k = 0;
    // loop over array
    for (let i = 0; i < nums.length; i++) {
        // if current value isn't val
        if (nums[i] !== val) {
            // then you can put it in k's place
            nums[k] = nums[i];
            // and then increment k
            k++;
        }
        // otherwise increment the loop because the value is already not val
        // this way the next time you get something that doesn't = val, you will overwrite it
    }
    // this way at the end
    return k;
}

console.log("~~two pointer approach~~");
console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
