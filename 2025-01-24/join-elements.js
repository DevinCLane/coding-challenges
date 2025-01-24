/* 
Using recursion, write a function that inserts a given character between each character in an array. Don't add the character at the end.

example: joinElements(["s", "cr", "t cod", " :) :)"], "e") => "secret code :) :)"
*/

const joinElements = (arr, joinString) => {
    // set up recursive function that calls the index, and the resultSoFar
    function recurse(index, resultSoFar) {
        // add the current index element to the result
        resultSoFar += arr[index];
        // if the index is at the end of the array
        if (index === arr.length - 1) {
            // return what we have of the result
            return resultSoFar;
            // otherwise recurse deeper, incrementing the index, and adding the join string to the result we have so far
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }
    // begin the process by calling the recursion starting at 0 index with an empty result
    return recurse(0, "");
};

console.log(
    joinElements(["s", "cr", "t cod", " :) :)"], "e"),
    "secret code :) :)"
);
