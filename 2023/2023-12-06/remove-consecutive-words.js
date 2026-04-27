/* 
Remove consecutive words array

You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])
*/

const removeConsecutiveLetters = (arr) => {
    // arr of strings
    // return a string
    // loop over the array
    // if i === i + 1, remove i + 1
    return arr.map((value) =>
        value
            .split("")
            .filter((value, index, array) => value !== array[index - 1])
            .join("")
    );
};

console.log(removeConsecutiveLetters(["abracadabra", "allottee", "assessee"]), [
    "abracadabra",
    "alote",
    "asese",
]);
console.log(removeConsecutiveLetters(["kelless", "keenness"]), [
    "keles",
    "kenes",
]);
console.log(
    removeConsecutiveLetters([
        "ccooddddddewwwaaaaarrrrsssss",
        "piccaninny",
        "hubbubbubboo",
    ]),
    ["codewars", "picaniny", "hubububo"]
);
console.log(removeConsecutiveLetters(["abracadabra", "allottee", "assessee"]), [
    "abracadabra",
    "alote",
    "asese",
]);
console.log(removeConsecutiveLetters(["kelless", "keenness"]), [
    "keles",
    "kenes",
]);
