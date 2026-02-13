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

// naive approach
// loop over array
// if current === val, splice at index, 1
// return index
// O(n^2) time: splice is O(n), this could do O(n) times
function removeElement3(nums: number[], val: number) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
}

console.log(removeElement3([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement3([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// extra memory approach
// create temp array
// push all values that don't === val into new array
// loop over original array, replacing all values from temp array into current array
// O(n) time, O(n) extra space for the array
function removeElement4(nums: number[], val: number) {
    const temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            temp.push(nums[i]);
        }
    }
    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }
    return temp.length;
}

console.log(removeElement4([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement4([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// two pointers with overwrite
// pointer k, and i
// if nums[i] !== val, then swap nums[i] and nums[k]
// therefore if nums[i] === val, i increments and finds a value that doesn't === val, and then that gets placed where k is
// in other words, we let k find where VAL is and then i finds a number to replace k with
// return k
function removeElement(nums: number[], val: number) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        // if the current value isn't val
        if (nums[i] !== val) {
            // replace the i pointer value into the k pointer value
            nums[k] = nums[i];
            // move k fowards
            k++;
        }
        // otherwise this means that the i value is val
        // we increment i until we find a value that isn't val, then place that happy path value into k's place
        // k keeps track of values that need to be replaced
        // i keeps track of values that can be put into k's val's place
    }
    return k;
}

console.log(removeElement([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);

// if writes are expensive (and order still doesn't matter)
// two pointers with a decrementing counter from the right
// pointer i and n
// while i < n
// if nums[i] === val
// decrement n
// replace the value
// otherwise increment i
function removeElement2(nums: number[], val: number) {
    // right and left pointers
    let i = 0;
    let n = nums.length;
    // run until the pointers cross
    while (i < n) {
        // if the left pointer value is val (we need to replace this)
        if (nums[i] === val) {
            // decrement from n first (why?)
            n--;
            // replace the left pointer value with the right pointer value
            // we don't increment i here because then we can check if the value we replaced is actually val
            nums[i] = nums[n];
        } else {
            // i gets incremented once nums[i] !== val
            i++;
        }
    }
    // the right pointer keeps track of how many replacements are needed and thus whatever is non val that is left
    return n;
}

console.log(removeElement2([1, 1, 2, 3, 4], 1), 3);
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
