/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

/* 
parameters: string
return: true or false, is the number of X's the same as the number of O's?
*/


// this solution didn't really work out. I got close here.
const XO = str => {
    // count xs and os
    // are they the same?
    let arr = str.toLowerCase().split('');
    let x = []
    let o = []
    if (!arr.includes('x', 'o')) {
        return true
    } else {
        // something is wrong with the way I'm pushing to the array here
        for (let i = 0; i < arr.length; i++) {
            if (str[i] === 'x') {
                x.push(str[i]);
            } else if (str[i] === 'o') {
                o.push(str[i])
            }
        }
    }
    return x.length === o.length
}

// new solution

const xolength = str => {
    let arr = str.toLowerCase().split('');
    return arr.filter(ele => ele === 'x').length === arr.filter(ele => ele === 'o').length
}

// test cases
console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);

console.log(xolength('xo'),true);
console.log(xolength("xxOo"),true);
console.log(xolength("xxxm"),false);
console.log(xolength("Oo"),false);
console.log(xolength("ooom"),false);