/* 
Let's do Two Sum again

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// parameters: array of numbers, target number
// return: array of the indices of the two numbers that add up to the target


const twoSum = (nums, target) => {
    // create a place to store what you've tested
    // loop through the array
    // if the previous number - target = current number, we are done
    // otherwise add current number to storage
    let prevValues = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const indexOfNeededValue = prevValues[neededValue];
        // why doesn't it work when I do `if (currentValue === neededValue)
        if (indexOfNeededValue != null) {
            return [indexOfNeededValue, i]
        } else {
            prevValues[currentValue] = i;
        }

    }
}

console.log(twoSum([2,7,11,15], 9), [0, 1])