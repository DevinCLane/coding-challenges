/* 
Remove consecutive words array

You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

console.log(removeConsecutiveDuplicates(["abracadabra","allottee","assessee"]), ["abracadabra","alote","asese"])
console.log(removeConsecutiveDuplicates(["kelless","keenness"]), ["keles","kenes"])
console.log(removeConsecutiveDuplicates(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(removeConsecutiveDuplicates(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(removeConsecutiveDuplicates(["kelless","keenness"]), ['keles','kenes'])
*/

const removeConsecutiveDuplicates = (arr) => {
    // loop through word (split to array)
    // ask if the prev letter is the same as the current letter, if it is remove it, otherwise move on
    // reduce?
    return arr.map((word) =>
        word
            .split("")
            .filter((value, index, arr) => value !== arr[index - 1])
            .join("")
    );
};

console.log("~~test cases~~");
console.log(
    removeConsecutiveDuplicates(["abracadabra", "allottee", "assessee"]),
    ["abracadabra", "alote", "asese"]
);
console.log(removeConsecutiveDuplicates(["kelless", "keenness"]), [
    "keles",
    "kenes",
]);
console.log(
    removeConsecutiveDuplicates([
        "ccooddddddewwwaaaaarrrrsssss",
        "piccaninny",
        "hubbubbubboo",
    ]),
    ["codewars", "picaniny", "hubububo"]
);
