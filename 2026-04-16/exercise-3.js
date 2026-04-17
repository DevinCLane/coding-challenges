/* 
given two strings, merge them with the following merge function: instead of comparing the characters in the usual lexicographical order,
compare them based on how many times they occur in their respective strings.
fewer occurrences mean the character is considered smaller; in case of equality, compare them lexicographically; in case of equality, 
take the character from the first string
*/

function mergeStrings(a, b) {
    // count how many times each string occurs in its respective string
    // hash map for both
    // loop over both hash maps and ask which string occurs less, put that string first, then the next one
    // if equal, put the lower in the dictionary first, if those are equal, put the char from the first string first

    // put the whole count in one object
    // sort the object based on the occurrences
    // print out the strings to a new string based on the occurrences
    // if two strings have same occurences, check which one is lower in dictionary
    // if both are equal, put the chat from the first string first

    const mapA = {};
    const mapB = {};
    for (const char of a) {
        mapA[char] = (mapA[char] ?? 0) + 1;
    }
    for (const char of b) {
        mapB[char] = (mapB[char] ?? 0) + 1;
    }

    Object.entries(mapA);
    Object.entries(mapB);

    return [mapA, mapB];
}

console.log(mergeStrings("sdflksjd", "asdfljksah"));
