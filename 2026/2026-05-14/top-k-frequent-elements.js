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
*/

function topK(nums, k) {
    const map = {};
    const result = [];
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
    }

    // this little trick of [, a], [, b] sorts by the values
    // sort basically has [key, value], [key, value]
    // then we just omit key, and just sort by value
    const count = Object.entries(map).sort(([, a], [, b]) => b - a);
    for (let i = 0; i < k; i++) {
        // because it's sorted by value, then we can push in the keys (index 0),
        // but turn them into numbers because they're strings first
        result.push(Number(count[i][0]));
    }
    return result;
}

console.log(topK([1, 2, 2, 3, 3, 3], 2), [2, 3]);
console.log(topK([7, 7], 1), [7]);

function topKFrequent(nums, k) {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    const arr = Object.entries(count).map(([num, freq]) => [
        freq,
        parseInt(num),
    ]);
    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0, k).map((pair) => pair[1]);
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2), [2, 3]);
console.log(topKFrequent([7, 7], 1), [7]);
