/* 
Implement a binary search on a sorted array
*/

/**
 *
 * @param {nums[]} nums - sorted array to search
 * @param {number} target - target value to find
 * @returns {number} - index of the target if found, -1 if not found
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

console.log(binarySearch([1, 2, 3, 4, 5], 1), "0");
console.log(binarySearch([1, 2, 3, 4, 5], 5), "4");
console.log(binarySearch([1], 1), "0");
console.log(binarySearch([], 1), "-1");
console.log(binarySearch(null, 1), "-1");
console.log(binarySearch([1, 2, 3], "3"), "-1");
console.log(binarySearch([1, 3, 5, 7, 9], 8), "-1");
