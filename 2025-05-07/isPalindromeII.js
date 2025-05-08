/* 
680. Valid Palindrome II

Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 
Example 1:
Input: s = "aba"
Output: true
Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:
Input: s = "abc"
Output: false
 
Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
*/

function validPalindrome(str) {
    let left = 0,
        right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return (
                isPalindrome(str.slice(0, left) + str.slice(left + 1)) ||
                isPalindrome(str.slice(0, right) + str.slice(right + 1))
            );
        }
    }
}

function isPalindrome(str) {
    let left = 0,
        right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
