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

// function nums k
function kthLargest(nums, k) {
    // k = nums.length - k
    k = nums.length - k;
    // quick sort (left, right)
    function quickSelect(left, right) {
        // pointer
        let pointer = left;
        // pivot
        let pivot = nums[right];
        // for loop
        for (let i = left; i < right; i++) {
            // if nums[i] <= pivot
            if (nums[i] <= pivot) {
                // swap i and pointer
                [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
                // increment pointer
                pointer++;
            }
        }
        // swap pointer and pivot
        [nums[pointer], nums[right]] = [nums[right], nums[pointer]];

        // if p > k, left
        if (pointer > k) {
            return quickSelect(left, pointer - 1);
            // if p < k, right
        } else if (pointer < k) {
            return quickSelect(pointer + 1, right);
            // otherwise return nums[pointer]
        } else return nums[pointer];
    }
    // run quick select 0, nums.length - 1
    return quickSelect(0, nums.length - 1);
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2), "expect: 5");
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), "expect: 4");
