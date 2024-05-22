/* 
Remove consecutive words array

You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

console.log(removeConsecutiveDuplicates(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"])
console.log(removeConsecutiveDuplicates(["kelless","keenness"]) = ["keles","kenes"])
console.log(removeConsecutiveDuplicates(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(removeConsecutiveDuplicates(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(removeConsecutiveDuplicates(["kelless","keenness"]), ['keles','kenes'])
*/

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */

const removeConsecutiveDuplicates = (arr) => {
    return arr.map((value) =>
        value
            .split("")
            // easier to use .filter((value, index, array) => value !== array[index - 1])
            .map((value, index, array) =>
                value === array[index - 1] ? "" : value
            )
            .join("")
    );
};

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
console.log(
    removeConsecutiveDuplicates(["abracadabra", "allottee", "assessee"]),
    ["abracadabra", "alote", "asese"]
);
console.log(removeConsecutiveDuplicates(["kelless", "keenness"]), [
    "keles",
    "kenes",
]);
