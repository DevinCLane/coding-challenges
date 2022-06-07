/* 
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

/* 
Parameters: taking in a string of letters (upper and lower case) and numbers
Return: number of characters that repeat
Example: "aabbcde" -> 2 # 'a' and 'b'
*/

const duplicateCount = text => {
    // set up a counter object
    const count = {};
    // set everything to lower case, split into an array
    const arr = text.toLowerCase().split('');
    // run a function on each member of the array
    // we add the element to the count object if it exists, and we add 1 to it if it already exists
    arr.forEach( x => { count[x] = (count[x] || 0) + 1});
    // set a duplicate counter variable
    let duplicates = 0; 
    // loop through object
    for (const item in count) { 
        // if the item in the object is greater than 1, add it to our duplicate counter, otherwise return 0 (this could be optimized with more time)
        count[item] > 1 ? duplicates++ : 0
    }
    return duplicates;
}

// test cases

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")