/* 
Implement a binary search tree
*/

const binarySearch = (nums, target) => {
    if (!nums || nums.length === 0) return -1;

    let start = 0,
        end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), "4");
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2), "-1");
