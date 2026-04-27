/* 
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// attempt 1: 

// const solution = string => {
//     // convert to array
//     let arr = string.split('');
//     // find upper case letter
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i].toUpperCase()) {
//             arr[i - 1] = ' ';
//         }
//     }
//     return arr.join('');
//     // add space before
//     // join to string

// }

const solution = string => {
    // split into array, run map function on each element of array
    let arr = string.split('').map(ele => {
        // if the element is upper case, add a space before the element
        if (ele === ele.toUpperCase()) {
            ele = ' ' + ele;
        }
        // return the new array
        return ele;
    })
    // join into a string
    return arr.join('');
}

// test cases
console.log(solution('camelCasing'), 'camel Casing')
console.log(solution('camelCasingTest'), 'camel Casing Test')