/* 
implement binary search on a sorted array
*/

function binarySearch(nums, target) {
    // base case if nums.length === 1 return nums
    if (nums.length === 1) {
        return nums;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return nums[mid];
            // if the mid is greater than the target, then we can throw away the right side
            // therefore the end becomes the mid - 1
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            end = mid + 1;
        }
    }
    return -1;
}
