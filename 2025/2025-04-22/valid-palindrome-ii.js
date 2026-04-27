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

// function validPalindromeII str
function validPalindromeII(str) {
    // left 0, right str.length - 1
    let left = 0,
        right = str.length - 1;
    // while left < right
    while (left < right) {
        // if (str[left] !== str[right])
        if (str[left] !== str[right]) {
            // run ispalindrome on removed the right pointer char and the left pointer character
            // return isPalindrome (str.slice(0, left) + str.slice(left + 1)) || isPalindrome(str.slice(0, right) + str.slice(right + 1))
            return (
                isPalindrome(str.slice(0, left) + str.slice(left + 1)) ||
                isPalindrome(str.slice(0, right) + str.slice(right + 1))
            );
        }
        left++;
        right--;
    }
    return true;
}

// function isPalindrome str
function isPalindrome(str) {
    // left 0, right str.length - 1
    let left = 0,
        right = str.length - 1;
    // while left < right
    while (left < right) {
        // if (str[left] !== str[right])
        if (str[left] !== str[right]) {
            // false
            return false;
        }
        // left++
        left++;
        // right--
        right--;
    }
    // true
    return true;
}

console.log(validPalindromeII("abc"), false);
console.log(validPalindromeII("abca"), true);
console.log(validPalindromeII("aba"), true);
