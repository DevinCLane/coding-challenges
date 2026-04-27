/* 
215. Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?
 
Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 
Constraints:
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

// target = len - k
// naive solution:
/* function kthLargest(arr, k) {
  // sort the array
  // return array[len- k]
  return arr.sort((a, b) => a - b)[arr.length - k]
} */

// function kth largest
function kthLargest(nums, k) {
    // k = nums.length - k
    k = nums.length - k;
    // function quickselect(left, right)
    function quickSelect(left, right) {
        // pivot starts at right value
        let pivot = nums[right];
        // pointer starts at left
        let pointer = left;

        // loop from left to right
        for (let i = left; i < right; i++) {
            // if nums[i] <= pivot
            if (nums[i] <= pivot) {
                // swap the index with pointer, and pointer with index
                [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
                // increase the pointer
                pointer++;
            }
        }
        // when you're done, swap pointer with pivot, and pivot with pointer
        [nums[pointer], nums[right]] = [nums[right], nums[pointer]];
        if (pointer > k) {
            return quickSelect(left, pointer - 1);
        } else if (pointer < k) {
            return quickSelect(pointer + 1, right);
        } else {
            return nums[pointer];
        }
    }
    return quickSelect(0, nums.length - 1);
}

// if pointer > k
// run quickselect on left, pointer - 1
// if pointer < k
// quickselect(pointer + 1, right)
// else we found it
// return nums[pointer]

// start it off with quickselect(0, nums.length - 1)
console.log(kthLargest([3, 2, 1, 5, 6, 4], 2), 5);
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
