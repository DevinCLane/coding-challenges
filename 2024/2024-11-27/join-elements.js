/* 

Using recursion, write a function that inserts a given character between each character in an array. Don't add the character at the end.

example: joinElements(["s", "cr", "t cod", " :) :)"], "e") => "secret code :) :)"
*/

function joinElements(arr, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += arr[index];
        if (index === arr.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }
    return recurse(0, "");
}

console.log(
    joinElements(["s", "cr", "t cod", " :) :)"], "e"),
    "secret code :) :)"
);
