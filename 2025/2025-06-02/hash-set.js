/* 
705. Design HashSet

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

    void add(key) Inserts the value key into the HashSet.
    bool contains(key) Returns whether the value key exists in the HashSet or not.
    void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

 

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)

 

Constraints:

    0 <= key <= 106
    At most 104 calls will be made to add, remove, and contains.


*/

class HashSet {
    constructor() {
        this.storage = [];
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.storage.push(key);
    }
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let removed = this.storage[key];
        delete this.storage[key];
        return removed;
    }
    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.storage.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

const myHashSet = new HashSet();
myHashSet.add(1); // set = [1]
console.log(myHashSet, "expect [1]");
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet, "expect: [1, 2]");
console.log(myHashSet.contains(1), "expect: true");
console.log(myHashSet.contains(3), "expect: false");
myHashSet.add(2); // set = ≈
console.log(myHashSet, "expect: [1, 2, 2]");
console.log(myHashSet.contains(2), "expect: true");
myHashSet.remove(2); // set = [1]
console.log(myHashSet, "expect: [1, 2]");
console.log(myHashSet.contains(2), "expect: true");
console.log(myHashSet.contains(2), "expect: false");
