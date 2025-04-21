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

/* 
naive solution
function kthLargest(nums, k) {
    const sorted = nums.sort((a, b) => b - a);
    return sorted[k - 1];
} */

/* 
using quick select algorithm

average case: O(n)
worst case: O(n^2)

naive sorting above = O(n log n)

this is more efficient because we don't need to sort the entire aray
*/

function kthLargest(nums, k) {
    // turn the kth largest element into finding the (n - k)th smallest element
    // if arr.length = 6, 2nd largest = 5th smallest-- n - k = 4
    // [1, 2, 3, 4, 5, 6], k = 2
    // 6 - 2 = 4
    k = nums.length - k;

    // recursive helper function to partition array around a pivot
    const quickSelect = (left, right) => {
        let pivot = nums[right];
        let p = left;

        // move all elements smaller than pivot to the left
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[p], nums[i]] = [nums[i], nums[p]];
                p++;
            }
        }
        [nums[p], nums[right]] = [nums[right], nums[p]];

        // recursive selection
        // search left side
        if (p > k) {
            return quickSelect(left, p - 1);
            // search right side
        } else if (p < k) {
            return quickSelect(p + 1, right);
            // answer is found
        } else {
            return nums[p];
        }
    };
    return quickSelect(0, nums.length - 1);
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2), 5);
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
