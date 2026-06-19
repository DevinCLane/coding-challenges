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
*/

function encode(strs) {
    let result = "";

    // loop across the input array
    for (const str of strs) {
        // take the length of the string, add the delimiter character, add the string
        // example output: ["Hello","World"] => 5#hello5#world
        result += str.length + "#" + str;
    }

    return result;
}

function decode(str) {
    const result = [];
    let i = 0;

    while (i < str.length) {
        let j = i;
        // go until you find the #, so that you can get the length of the string
        while (str[j] !== "#") {
            j++;
        }

        // length will be the number from the beginning until the #
        const length = Number(str.slice(i, j));
        // the start of the word is going to be one index beyond the #
        const start = j + 1;
        // the end of the word is goin to be the length of the string, PLUS the start which allows you to start after the number and the #
        const end = start + length;

        // push the word to the result array
        result.push(str.slice(start, end));
        // move i up to the end of that word that you just decoded
        i = end;
        // then continue to the next word
    }
    return result;
}

const encoded = encode(["hello", "world"]);
console.log("encoded string", encoded);
console.log("decoded string back to normal", decode(encoded));
