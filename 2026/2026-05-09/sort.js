/* 

Sort an array
You are given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
Example 1:
Input: nums = [10,9,1,1,1,2,3,1]

Output: [1,1,1,1,2,3,9,10]
Example 2:
Input: nums = [5,10,2,1,3]

Output: [1,2,3,5,10]
Constraints:
1 <= nums.length <= 50,000.
-50,000 <= nums[i] <= 50,000
*/

/**
 *
 * @param {number[]} nums
 * @returns
 */
function mergeSort(nums) {
    if (nums.length === 1) {
        return nums;
    }

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 */
function merge(left, right) {
    const res = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            res.push(left[indexLeft]);
            indexLeft++;
        } else {
            res.push(right[indexRight]);
            indexRight++;
        }
    }
    return res.concat(left.slice(indexLeft), right.slice(indexRight));
}

console.log(mergeSort([10, 9, 1, 1, 1, 2, 3, 1]), [1, 1, 1, 1, 2, 3, 9, 10]);
