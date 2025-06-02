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

// brute force, not in place
// create a result array
// loop over nums
// if nums[i] !== val, push to result
// loop over result
// replace: nums[i] = result[i]
// return result.length
/**
 * time complexity: O(n) where n is the length of nums
 * space compelxity: O(n)
 * we create a separate array, not removing in place (so doesn't really fit requirements)
 * two passes through array
 * @param {number[]} nums
 * @param {number} val
 * @returns {number[]}
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

/**
 * two pointers
 *
 * time complexity: O(n) where n is the length of the array
 * space complexity: O(1)
 * one pass through the array, however might do unnecessary writes
 * @param {number[]} nums
 * @param {number} val
 * @returns {number[]}
 */
function removeElement2(nums, val) {
    // create pointer k at 0
    let k = 0;
    // loop over nums
    for (let num of nums) {
        // if the value doesn't match val, then swap it
        // this way we get all the non val values in the beginning of the array
        // if nums[i] !== val
        if (num !== val) {
            // nums[i] = nums[k]
            num = nums[k];
            // increment k
            k++;
        }
    }
    // return k
    return k;
}

console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

/**
 *  two pointers but set the pointer at the end of the array, end swap
 * time: O(n)
 * space: O(1)
 *
 * most efficient for many matching values
 * minimizes array writes
 * @param {number[]} nums
 * @param {number} val
 * @returns {number[]}
 */
function removeElement3(nums, val) {
    // i and n = nums.length
    // if the values match, decrement n then place that value at i
    let i = 0,
        n = nums.length;
    for (const num of nums) {
        if (num === val) {
            n--;
            nums[i] = num[n];
        } else {
            i++;
        }
    }
    return n;
}

console.log(removeElement3([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement3([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
