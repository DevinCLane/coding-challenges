/*
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

You may consider that there will not be any empty arrays/vectors.
*/

/*
We use the sort method here to sort the array.
*/

let min = function(list){
    list.sort((a, b) => a - b)
    return list[0];
}

let max = function(list){
    list.sort((a, b) => b - a)
    return list[0];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110)
console.log(min([42, 54, 65, 87, 0]), 0)
console.log(max([4,6,2,1,9,63,-134,566]), 566)
console.log(max([5]), 5);

// alternatively we could use a spread operator and the Math.min / Math.max functionality

let minWithSpread = (list) => Math.min(...list);
let maxWithSpread = (list) => Math.max(...list);
