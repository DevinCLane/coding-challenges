/* 
Using recursion, write a function that inserts a given character between each character in an array. Don't add the character at the end.

example: joinElements(["s", "cr", "t cod", " :) :)"], "e") => "secret code :) :)"
*/

function joinElements(arr, joinString) {
    function recurse(result, index) {
        result += arr[index];

        if (index === arr.length - 1) {
            return result;
        } else return recurse(result + joinString, index + 1);
    }
    return recurse("", 0);
}
// result string
// base case - when at the 2nd to last element in arr
// action: add arr[i] to result
// action2: add join string to result
// post recurse: add arr[i] to result

console.log(
    joinElements(["s", "cr", "t cod", " :) :)"], "e"),
    "secret code :) :)"
);
