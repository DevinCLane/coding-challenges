/* 
greatest common divisor
*/

// using a for loop
function gcd(x, y) {
    // which number is smaller
    // start at the bigger one, count down
    // if both x and y % i === 0, we found it
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i
        }
    }
}

console.log(gcd(30,12),6)
console.log(gcd(8,9),1)
console.log(gcd(1,1),1)

// using recursion
function gcd(x, y) {
    // base case
    if (y === 0) {
        return x;
    } else {
        return gcd(y, x % y)
    }
}

console.log(gcd(30,12),6)
console.log(gcd(8,9),1)
console.log(gcd(1,1),1)