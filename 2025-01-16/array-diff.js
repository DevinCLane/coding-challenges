/* 
Array Diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3])
console.log(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]")
console.log(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]")
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []")

https://www.codewars.com/kata/523f5d21c841566fde000009
*/

const arrayDiff = (a, b) => {
    // filter on a
    // pass through anything in a that is not in b
    return a.filter((n) => !b.includes(n));
};

console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3]);
console.log(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
console.log(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");
