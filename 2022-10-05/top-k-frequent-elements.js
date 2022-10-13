/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/* 
Parameters: integer array `nums` and an integer `k`
return: an integer array that contains the elements that occur at least k times
*/

// create a hash map
// loop over the array
// store the number of times each element repeats
// if greater than K, put in resultant array
// return resultant array

// intial solution when the question was unclear. here I solved for numbers that appear at least k times.
const kFrequentElements = (nums, k) => {
    const numsCount = {};
    for (const i of nums) {
        if (!numsCount[i]) {
            numsCount[i] = 1;
        } else {
            numsCount[i]++
        }
    }
    const result = [];
    Object.entries(numsCount).forEach(([key, value]) => {
        if (value >= k) {
            result.push(+(key))
        }
    })
    return result;
}

// console.log(kFrequentElements([1,1,1,2,2,3], 2)) // [1, 2]


// incomplete!
const kFrequentElements2 = (nums, k) => {
    const numsCount = {};
    // nums.sort()
    for (const i of nums) {
        if (!numsCount[i]) {
            numsCount[i] = 1;
        } else {
            numsCount[i]++
        }
    }
    console.log(numsCount)
    // const sortedValues = Object.values(numsCount).sort().reverse();
    // console.log(sortedValues)
    const sortedObj = Object.fromEntries(
        Object.entries(numsCount).sort(([,a], [,b]) => a - b).reverse()
    )
    console.log(sortedObj)
    return Object.keys(numsCount).sort().reverse().slice(0, k)
}

// console.log(kFrequentElements2([1,1,1,2,2,3], 2), [1, 2]) // [1, 2]
console.log(kFrequentElements2([4,1,-1,2,-1,2,3], 2), [-1, 2]) // [-1, 2]