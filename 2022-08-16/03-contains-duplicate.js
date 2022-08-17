/* 
Brute force
*/

const containsDuplicate = nums => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
} 

console.log(containsDuplicate([1, 2, 3, 4, 5]), false)
console.log(containsDuplicate([1, 2, 3, 4, 5, 2]), true)