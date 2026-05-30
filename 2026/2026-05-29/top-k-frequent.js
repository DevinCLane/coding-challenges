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
You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.

create a hash map with the count of each element
sort that by frequency
grab the kth element
*/

function topKFrequent(nums, k) {
    const map = {};
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
    }
    return Object.entries(map)
        .sort(([, aFreq], [, bFreq]) => bFreq - aFreq)
        .slice(0, k)
        .map(([num, freq]) => Number(num));
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
