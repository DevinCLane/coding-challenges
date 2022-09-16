/* 
given an array nums and a target integer target, return the indices of the array nums such that they add up to the target
e.g., nums = [1, 99, 22, 11]; target = 33; return [2, 3]
*/

const twoSumBrute = (nums, target) => {
    // we can brute force this with two pointers
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log(twoSumBrute([1, 11, 33, 99], 44), [1, 2])

// we can improve this using a hash map to store previously compared values

const twoSumHash = (nums, target) => {
    // here's where we store previously compared values
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        // the needed value will be the target - the current
        const neededValue = target - current;
        const indexOfNeededValue = hash[neededValue];
        // if we have the needed value in the hash map, this means it adds with our current to the target
        if (indexOfNeededValue !== undefined) {
            // return the indices
            return [indexOfNeededValue, i];
        } else {
            // otherwise add the current value and its index to the hash
            hash[current] = i;
        }
    }
}

console.log(twoSumHash([1, 11, 33, 99], 44), [1, 2])

