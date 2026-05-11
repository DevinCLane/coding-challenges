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
-50,000 <= nums[i] <= 50,000Sort an array
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

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft), right.slice(indexRight));
}

console.log(mergeSort([10, 9, 1, 1, 1, 2, 3, 1]), [1, 1, 1, 1, 2, 3, 9, 10]);
