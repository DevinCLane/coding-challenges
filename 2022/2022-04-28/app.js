/*
https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/

/*
My notes:

First tried using includes(), which returns every instance of the letter 'r', doesn't work.
Decided to see if the indexOf('r') === 0 then return the appropriate string.
Another approach would be to return name[0] === 'r'
*/

function areYouPlayingBanjo(name) {
    if(name.toLowerCase().indexOf('r') === 0) {
        return name + " plays banjo"
    } else return name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");

// alternate approach

function doYouPlayBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
  }