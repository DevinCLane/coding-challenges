/* 
You will be given a vector [array] of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

const twoSort = string => {
    // sort the array, return the first element
    // split the first element by each letter into its own array
    // join the word back into a string, passing in a separator argument of '***' between each letter
    return string.sort()[0].split('').join('***')
}

// test cases

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 