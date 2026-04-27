/*

Implement binary search on a sorted array
*/

const binarySearch = (nums, target) => {
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
        const mid = Math.floor((start + end) / 2);

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
