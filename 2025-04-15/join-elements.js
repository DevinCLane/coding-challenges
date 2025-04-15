/* 
Using recursion, write a function that inserts a given character between each character in an array. Don't add the character at the end.

example: joinElements(["s", "cr", "t cod", " :) :)"], "e") => "secret code :) :)"

// outer function to loop, arr, index
// result = ""
// result += arr[index]
// inner function to recurse
// if index === arr.length -1, return arr, otherwise recurse and add result +=
*/

function joinElements(arr, code) {
    function recurse(index, result) {
        result += arr[index];

        if (index === arr.length - 1) {
            return result;
        } else {
            return recurse(index + 1, (result += code));
        }
    }
    return recurse(0, "");
}

console.log(
    joinElements(["s", "cr", "t cod", " :) :)"], "e"),
    "secret code :) :)"
);
