/* 
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
/* 
Parameters: string (numbers neg or pos, float or integer), letters, anything
Return: true or false only if we have 4 numbers or 6 numbers: positive integers
*/


const validatePIN = pin => {
    if (pin.length != 4 && pin.length != 6) {
        return false
    }
    for (let i in pin) {
        if (pin[i] > '9' || pin[i] < '0') {
            return false
        }
    }
    return true;
}



// test cases

console.log(validatePIN("123"),false, "Wrong output for '123'")
console.log(validatePIN("a234"),false, "Wrong output for 'a234'")
console.log(validatePIN("1111"),true, "Wrong output for '1111'");
console.log(validatePIN("123456"),true, "Wrong output for '123456'");