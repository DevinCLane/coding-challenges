/* 

14: Encode and Decode Strings
Medium Topics Company Tags Hints
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
Machine 1 (sender) has the function:
string encode(vector<string> strs) {
    // ... your code
    return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
    //... your code
    return strs;
}
So Machine 1 does:
string encoded_string = encode(strs);
and Machine 2 does:
vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.
Implement the encode and decode methods.
Example 1:
Input: dummy_input = ["Hello","World"]

Output: ["Hello","World"]

Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Example 2:
Input: dummy_input = [""]

Output: [""]

Constraints:
0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains any possible characters out of 256 valid ASCII characters.

Follow up: Could you write a generalized algorithm to work on any possible set of characters?

use a delimiter character #
the issue is what if the string contains the delimiter character?
    start with the length of the string, so that you can include everything, even a delimiter character

    hello world => 5hello#5world

decode will require two pointers to keep track of everything
*/

/**
 *
 * @param {string[]} strs
 */
function encode(strs) {
    let result = "";
    for (const str of strs) {
        result += str.length + "#" + str;
    }
    return result;
}
/**
 *
 * @param {string} str
 */
function decode(str) {
    const result = [];
    let i = 0;
    // how do i know to set up two pointers
    // how do i know to set up a while loop and manually update i instead of a for of loop or a for loop?
    while (i < str.length) {
        let j = i;
        while (str[j] !== "#") {
            j++;
        }
        const length = Number(str.slice(i, j));
        const start = j + 1;
        const end = start + length;
        result.push(str.slice(start, end));
        i = end;
    }
    return result;
}

const encoded = encode(["hello", "world"]);
console.log("encoded", encoded);
const decoded = decode(encoded);
console.log("decoded", decoded);
