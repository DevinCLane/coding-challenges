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

create hash map counting frequency
sort by frequency
slice from 0 to k elements
*/

/**
 * time: O(n log n) due to sorting
 * space: O (n)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKElements(nums, k) {
    const map = {};
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
    }
    return Object.entries(map)
        .sort(([numA, freqA], [numB, freqB]) => freqB - freqA)
        .slice(0, k)
        .map(([num, freq]) => Number(num));
}

// console.log(topKElements([1, 2, 2, 3, 3, 3], 2), [2, 3]);
// console.log(topKElements([7, 7], 1), [7]);

/**
 *  if we place each element in the index that matches its frequency, then we don't need to sort
 *
 * time: O(n)
 * space: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */

function topKElements2(nums, k) {
    const map = {};
    // question: why nums.length + 1
    // answer: so that when you place each element in frequency, its index matches its count. otherwise the element with count 1 would be at index 0
    // question: why fill with arrays
    // answer: to fill up the space that doesnt have a value, so that there could be empty spaces without numbers?
    // better answer: each index could have multiple values, i.e., more than one value could appear 3 times.
    const frequency = Array.from({ length: nums.length + 1 }, () => []);
    const result = [];
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
    }
    for (const num in map) {
        let index = map[num];
        // question: why push instead of just frequency[index] = Number(num)
        // answer: in order to push multiple values to the same frequency array
        frequency[index].push(Number(num));
    }
    console.log(frequency);
    for (let i = frequency.length - 1; i > 0; i--) {
        // question: why loop over frequency[i], what is frequency[i]
        // answer: we need to get inside of the array within the array we created, we need to loop over multiple values if more than one value has the same frequency
        // question: how does this deal with empty arrays, such as indices where we have no number?
        // anwswer: num returns undefined and nothing gets added to result?
        // better answer: `for (const num of frequency[i])` simply does nothing for an empty array, these buckets are skipped
        console.log(`\n i is ${i}`);
        for (const num of frequency[i]) {
            console.log(
                `num is ${num} within frequency[i] which is ${frequency[i]}`,
            );
            result.push(num);
            if (result.length === k) {
                return result;
            }
        }
    }
}

console.log(topKElements2([1, 2, 2, 3, 3, 3], 2), [2, 3]);
console.log(topKElements2([7, 7], 1), [7]);
