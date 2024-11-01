/*
Rewrite this function so that it uses a loop rather than recursion
*/

function joinElements(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index];

        if (index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }

    return recurse(0, "");
}

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));

function joinElementsLoop(array, joinString) {
    let resultSoFar = "";
    for (let i = 0; i < array.length - 1; i++) {
        resultSoFar += array[i] + joinString;
    }

    return resultSoFar + array[array.length - 1];
}
console.log(joinElementsLoop(["s", "cr", "t cod", " :) :)"], "e"));
