/* 
Solve contains duplicate

given an array of integers nums, return true if any numbers repeat, false if not
*/

// brute force

const containsDuplicateBrute = nums => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicateBrute([1, 2, 3, 4, 5]), false)
console.log(containsDuplicateBrute([1, 2, 3, 4, 5, 2]), true)

// using a Set

const containsDuplicateSet = nums => {
    const numsSet = new Set();
    for (const i of nums) {
        // if the number already exists in the set, we return true since it's a repetition
        if (numsSet.has(i)) {
            return true;
        }
        // add the number to the set if it doesn't exist
        numsSet.add(i);
    }
    // if we've gone through the whole set and we didn't return true, then there are no repetitions so we can return false
    return false;
}

console.log(containsDuplicateSet([1, 2, 3, 4, 5, 2, 2]), true)
console.log(containsDuplicateSet([1, 2, 3, 4, 5]), false)
