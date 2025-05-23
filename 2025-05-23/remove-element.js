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

function removeElement(nums, val) {
    // result = []
    const result = [];
    // loop over nums
    for (const num of nums) {
        // if nums[i] !== val
        if (num !== val) {
            // push to result array
            result.push(num);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }

    // length of result array
    return result.length;
}

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// two pointers

/**
 * Time complexity - O(n), where n is length of array
 * Space complexity - O(1) - no new data structures created
 *
 * each valid element is moved exactly once to its correct position
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement2(nums, val) {
    // set up a pointer
    // k tracks where we're storing non VAL elements
    let k = 0;
    // loop over nums
    for (let i = 0; i < nums.length; i++) {
        // if current value !== val,
        // if it's not val, then we get to move it to the front
        if (nums[i] !== val) {
            // swap nums[i] = nums[k]
            // moves valid elements to the front of the array
            nums[i] = nums[k];
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
 * Time complexity - O(n), where n is length of array
 * Space complexity - O(1) - no new data structures created
 *
 * fewer writes to the array than above solution
 * when we find a value to remove, we swap with the end
 * partitions the array in one pass
 * handles cases where val is rare more efficiently
 * doesn't need to move every single element even after removing the VAL values
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement3(nums, val) {
    // pull from the end of the array
    // set up counter i
    let i = 0,
        // use n as the end pointer (length of array)
        n = nums.length;
    while (i < n) {
        // if nums[i] === val
        // if it is val, then we need to replace it with a correct value from the back
        if (nums[i] === val) {
            // decrement n, then take that value and put it in i's place
            // pull from elements at the end of the array to place at current location
            nums[i] = nums[--n];
            // don't increment i because we need to check the swapped element in case it's val
        } else {
            // just move forward if we find a value to keep (nums[i] !== val)
            i++;
        }
    }
    // return n
    return n;
}

console.log(removeElement3([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement3([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
