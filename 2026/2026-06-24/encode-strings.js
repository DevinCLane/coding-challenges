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

push them together as one string, but then how would you know how to split them back into two strings again

you could use a delimiter character, but what if your string includes that character

hello#world
he#llo world
he llo world

instead of
he#llo world

therefore, write the number of chars of each string into the string

hello world => 5#hello#5world
*/

function encode(strs) {
    let result = "";
    for (const str of strs) {
        result += str.length + "#" + str;
    }
    return result;
}

function decode(str) {
    const result = [];
    let i = 0;
    while (i < str.length) {
        // sometimes you need a second pointer
        let j = i;
        // go right up until before the #, this tells you the length of the string
        while (str[j] !== "#") {
            j++;
        }

        // the length is between i and j (right before the hash tag)
        const length = Number(str.slice(i, j));
        // one char beyond the # start the word
        const start = j + 1;
        // the end of the word is start + the length of the word
        const end = start + length;
        // slicing the str from start to end will give you the new word, push that slice to the result array
        result.push(str.slice(start, end));
        // move i up to the end of the current word, start the loop over for the next word
        i = end;
    }
    return result;
}

const encoded = encode(["hello", "world"]);
console.log(encoded);
const decoded = decode(encoded);
console.log(decoded);
