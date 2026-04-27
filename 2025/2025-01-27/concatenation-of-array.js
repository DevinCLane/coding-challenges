/* 
1929. Concatenation of Array

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

 

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

 

Constraints:

    n == nums.length
    1 <= n <= 1000
    1 <= nums[i] <= 1000


*/

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

const getConcatenation = (nums) => {
    const result = [];
    for (let i = 0; i < 2; i++) {
        for (const num of nums) {
            result.push(num);
        }
    }
    return result;
};

console.log(getConcatenation([1, 2, 1]), [1, 2, 1, 1, 2, 1]);
console.log(getConcatenation([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1]);

const getConcatenation2 = (nums) => {
    let n = nums.length;
    let ans = new Array(n * 2);
    for (let i = 0; i < n; i++) {
        ans[i] = ans[i + n] = nums[i];
    }
    return ans;
};

console.log(getConcatenation2([1, 2, 1]), [1, 2, 1, 1, 2, 1]);
console.log(getConcatenation2([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1]);
