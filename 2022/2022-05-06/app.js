/* 
https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

/* 
My notes:
- Great candidate for reduce
- we will also try this with a for loop
*/

function grow(x){
    return x.reduce((product, num) => product * num);
}

// Rewritten as an arrow function

const growArrowFunction = x => x.reduce((product, num) => product * num);

// With a for loop

function growForLoop(x){
    let product = 1;
    for (let i = 0; i < x.length; i++){
        product *= x[i];
    }
    return product;
}

// Tests
console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16); 
console.log(grow([2, 2, 2, 2, 2, 2]), 64); 

console.log(growArrowFunction([1, 2, 3]), 6);
console.log(growArrowFunction([4, 1, 1, 1, 4]), 16); 
console.log(growArrowFunction([2, 2, 2, 2, 2, 2]), 64);

console.log(growForLoop([1, 2, 3]), 6);
console.log(growForLoop([4, 1, 1, 1, 4]), 16); 
console.log(growForLoop([2, 2, 2, 2, 2, 2]), 64);