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

// function kth largest(nums, k)
function kthLargest(nums, k) {
    // k = nums.length - k
    k = nums.length - k;
    // function quickSelect(left, right)
    function quickSelect(left, right) {
        // pointer = left
        let pointer = left;
        // pivot = nums[right]
        let pivot = nums[right];
        // for i = left, l < right
        for (let i = left; i < right; i++) {
            // if nums[i] <= nums[pivot]
            if (nums[i] <= pivot) {
                // swap pointer and i
                // [i, pointer] [pointer, i]
                [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
                // pointer++
                pointer++;
            }
            // swap pivot and pointer
        }
        [nums[pointer], nums[right]] = [nums[right], nums[pointer]];
        // quick sort logic
        // if pointer > k, quickselect on left
        if (pointer > k) {
            return quickSelect(left, pointer - 1);
        } else if (pointer < k) {
            // if pointer < k, quick select on rigth
            return quickSelect(pointer + 1, right);
            // otherwise we found our value: return nums[pointer]
        } else return nums[pointer];
    }
    return quickSelect(0, nums.length - 1);
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2), 5);
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
