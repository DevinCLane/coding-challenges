/* 

7: 
Remove Element
You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.
After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.
Note:
The order of the elements which are not equal to val does not matter.
It is not necessary to consider elements beyond the first k positions of the array.
To be accepted, the first k elements of nums must contain only elements not equal to val.
Return k as the final result.
Example 1:
Input: nums = [1,1,2,3,4], val = 1

Output: [2,3,4]
Explanation: You should return k = 3 as we have 3 elements which are not equal to val = 1.
Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2

Output: [0,1,3,0,4]
Explanation: You should return k = 5 as we have 5 elements which are not equal to val = 2.
Constraints:
0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/

// brute force
function removeElement(nums, val) {
    // create new array
    const answer = [];
    // loop over array
    for (const num of nums) {
        // if nums[i] !== val, push to new array
        if (num !== val) {
            answer.push(num);
        }
    }
    for (let i = 0; i < answer.length; i++) {
        nums[i] = answer[i];
    }

    // return new array length
    return answer.length;
}

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// brute force
function removeElement2(nums, val) {
    // two pointers
    // keep track of k
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        // if the two elements don't match, swap places and increment pointer
        // this way we move every value that isn't val to the front
        // downside is we might do unnecessary swaps
        if (nums[i] !== val) {
            nums[i] = nums[k];
            k++;
        }
    }
    // return pointer
    return k;
}

console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

/**
 * two pointers, swap from the end
 * going left to right, if the value is val, take from the end and put it in the beginning
 * at the end return where the pointer ended up, going from the end of the array to the
 *
 * nums: [1, 1, 2, 3, 4] val: 1, expect: 3
 * [1, 1, 2, 3, 4]: 1 is val, decrement n from 5 to 4, take nums[4], place it in nums[0]
 * n: 4, i: 0
 * [4, 1, 2, 3, 4]
 * increment i: 1
 * [4, 1, 2, 3, 4]: 1 is val, decrement n from 4 to 3, takes nums[3] place it in nums[1]
 * [4, 3, 2, 3, 4]
 * n: 3, i: 1
 * we never hit nums[i] === val again, so we just increment i until the end
 * return n: 3
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement3(nums, val) {
    let i = 0,
        n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[--n];
        } else {
            i++;
        }
    }
    return n;
}
