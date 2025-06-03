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

// brute force
// create result []
// loop over nums
// if nums !== val
// push to result
// loop over nums
// nums[i] = result[i]
// return result.length
/**
 * time complexity - O(n)
 * space O(n)
 * two passes through the array
 * uses extra space for result array
 *
 * @param {number[]} nums
 * @param {number} val
 * @returns {number} k - the length of the array without val
 */
function removeElement(nums, val) {
    const result = [];
    for (const num of nums) {
        if (num !== val) {
            result.push(num);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
    return result.length;
}

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// two pointers
// k = 0
// loop over nums
// if nums[i] !== val
// nums[i] = nums[k]
// increment k
// return k
/**
 * two pointer solution
 * time complexity O(n) - no improvement over brute force
 * space complexity O(1) - no need to create the extra result array like above
 * it may do unnecessary writes
 * @param {number[]} nums
 * @param {number} val
 * @returns {number} k - the length of the array without val
 */
function removeElement2(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[i] = nums[k];
            k++;
        }
    }
    return k;
}
console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

/**
 * two pointers with end swap
 * time complexity O(n) - same as above
 * space complexity O(1) - same as above
 * the improvement here is that we do less swaps than the 2nd solution
 * by grabbing from the end and only swapping when a value matches val, we minimize swaps
 * @param {number[]} nums
 * @param {number} val
 * @returns {number} k - the length of the array without val
 */
// loop over nums
// if num === val
// decrement n, grab that value, place it in nums[i]
// otherwise increment i
// return n
function removeElement3(nums, val) {
    // i and n = nums.length
    let i = 0,
        n = nums.length;
    for (const num of nums) {
        if (num === val) {
            nums[i] = nums[--n];
        } else {
            i++;
        }
    }
    return n;
}
console.log(removeElement3([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement3([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
