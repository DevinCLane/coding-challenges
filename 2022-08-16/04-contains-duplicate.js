/* 
Contains duplicate with Set
*/

const containsDuplicate = nums => {
    // a set is an object containing all unique values
    // which is great for our purposes
    const numSet = new Set();
    for (const i in nums) {
        // if the number is already in the set, then it's a duplicate and we can return true
        if (numSet.has(i)) {
            return true;
        } else {
            // if it's not in the set, add it to the set
            // this means it's the first time we've seen this number
            numSet.add(i);
        }
    }
    // if we never returned true, and added numbers to the set
    // all numbers only occured once and therefore we can return false
    // to indicate that we've seen no duplicates
    return false;
}