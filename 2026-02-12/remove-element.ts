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

// loop over array
// if nums[i] === val, splice(i, 1)
// otherwise increment i
// O(n^2)  where n is length of the array. splice is O(n), and you could run it O(n) times

// two pointers with overwrite
// pointer k
// pointer i
// if nums[i] !== val, swap nums k = i, increment k
// otherwise k will stay in the same place and then you will find something that doesn't = val, and put that in the k spot
// basically k keeps track of the spot that needs to be replaced because it has an element === to val
// i continues down the array looking for whatever will replace val
function removeElement(nums: number[], val: number) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// if writes are costly, then a swap with tail using a decrementing n counter \
// reduces the number of write if val is rare, at cost of losing order

// left pointer i
// right pointer nums.length
// while i < n
// if left pointer === val
// decrement the right pointer value first
// place the right pointer value into the left
// otherwise increment left pointer value
// return right pointer value

// i, n left and right pointers
// while i < n
// if nums[i] === val
// decrement n first (why)
// swap nums[i] = nums[n]
// otherwise increment i
// once i and n touch, return n that will tell you all values that swapped that weren't val
function removeElement2(nums: number[], val: number) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            n--;
            nums[i] = nums[n];
        } else {
            i++;
        }
    }
    return n;
}

console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
