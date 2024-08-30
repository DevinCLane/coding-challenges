/* 
Implement a binary search on a sorted array
*/

/**
 *
 * @param {number[]} nums - sorted array of numbers
 * @param {number} target - the number we are search for
 * @returns {number} - index of target, -1 if not found
 */
const binarySearch = (nums, target) => {
    // type checking to make sure it's an array, if it's empty return -1
    // set start and end points
    // while start is less than end, run the loop
    // set a mid point - Math.floor((start + end) / 2)
    // if nums[mid] equals the target, we return the index
    // if nums[mid] is greater than target, then mid = end - 1
    // if nums[mid] is less than target, mid = start
    // return -1 if not found
    if (
        !Array.isArray(nums) ||
        nums.length === 0 ||
        typeof target !== "number"
    ) {
        return -1;
    }
    let start = 0,
        end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3), "Expected: 2");
console.log(binarySearch([1, 2, 3, 4, 5], 6), "Expected: -1");
console.log(binarySearch([1, 3, 5, 7, 9], 5), "Expected: 2");
console.log(binarySearch([1, 3, 5, 7, 9], 1), "Expected: 0");
console.log(binarySearch([1, 3, 5, 7, 9], 9), "Expected: 4");
console.log(binarySearch([], 5), "Expected: -1");
console.log(binarySearch([1], 1), "Expected: 0");
console.log(binarySearch([1, 2], 2), "Expected: 1");
console.log(binarySearch([-5, -3, 0, 2, 4, 6, 8], 0), "Expected: 2");
console.log(binarySearch([-5, -3, 0, 2, 4, 6, 8], -5), "Expected: 0");
console.log(binarySearch([-5, -3, 0, 2, 4, 6, 8], 8), "Expected: 6");
console.log(binarySearch([1, 1, 2, 3, 3, 4, 5, 5], 3), "Expected: 3 or 4");
