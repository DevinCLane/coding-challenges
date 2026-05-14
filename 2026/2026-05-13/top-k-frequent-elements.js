/* 
13. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.
Example 1:
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:
Input: nums = [7,7], k = 1

Output: [7]
Constraints:
1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

Recommended Time & Space Complexity

You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array. 


*/

/* 
create hash map of the count of each item in the array
create an array for result
once the count of an item === k, add it to the array
*/

// wrong!!!
// this is counting the elements that occur k times, not the k most frequent element
// follow up: study a sorting approach, and a bucket sort approach
function topKItems(nums, k) {
    const map = {};
    const result = [];
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
        if (map[num] === k) {
            result.push(num);
        }
    }
    return result;
}

console.log(topKItems([1, 2, 2, 3, 3, 3], 2), [2, 3]);
console.log(topKItems([7, 7], 1), [7]);
