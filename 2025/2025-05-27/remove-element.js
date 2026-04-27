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

// filter out n !== val

// loop over the array
// if nums[i] === val, slice replace
// queue?

/**
 * brute force
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement(nums, val) {
    const temp = [];
    for (const num of nums) {
        if (num !== val) {
            temp.push(num);
        }
    }

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }
    return temp.length;
}

/* 
time complexity: O(n)
space complexity: O(n)
*/

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

/**
 * two pointers
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement2(nums, val) {
    // keep track of a pointer
    let k = 0;
    // loop over the array
    for (let i = 0; i < nums.length; i++) {
        // if the current value isn't val, then we want to swap it to be before val in the array
        if (nums[i] !== val) {
            // or nums[k++] = nums[i]
            // this would swap the values then increment k
            nums[k] = nums[i];
            k++;
        }
    }
    // the pointer k will now be at the position after all the swaps
    return k;
}

/* 
time complexity: O(n)
space complexity: O(1)
*/

console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

function removeElement(nums, val) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Find a value to remove from the left
        while (left <= right && nums[left] !== val) {
            left++;
        }
        // Find a value to keep from the right
        while (left <= right && nums[right] === val) {
            right--;
        }
        // Swap them if we haven't crossed
        if (left < right) {
            nums[left] = nums[right];
            nums[right] = val;
            left++;
            right--;
        }
    }
    return left;
}
