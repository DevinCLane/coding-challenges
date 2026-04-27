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
 
kth largest === nums.length - k
Constraints:
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

// function nums, k
function kthLargest(nums, k) {
    // k = nums.length - k
    k = nums.length - k;
    // function quick select left, right
    function quickSelect(left, right) {
        // pointer = left
        let pointer = left;
        // pivot = nums[right]
        let pivot = nums[right];
        // for i = left i < right i++
        for (let i = left; i < right; i++) {
            // if nums[i] <= pivot
            if (nums[i] <= pivot) {
                // swap nums[i] and nums[pointer]
                [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
                // pointer++
                pointer++;
            }
            // when done, swap nums[right] and pointer
        }
        [nums[pointer], nums[right]] = [nums[right], nums[pointer]];
        // logic comparing indices
        // if pointer < k quick select from pointer + 1, right
        if (pointer > k) {
            return quickSelect(left, pointer - 1);
            // if pointer > k quick select on left, pointer -1
        } else if (pointer < k) {
            return quickSelect(pointer + 1, right);
            // else return nums[pointer]
        } else return nums[pointer];
    }
    // return quickselect 0, nums.length - 1
    return quickSelect(0, nums.length - 1);
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2), 5);
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
