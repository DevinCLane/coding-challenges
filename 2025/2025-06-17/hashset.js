/* 
9. 
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

// create a hash table using an array
// hashing algorithm for collisions = use % to keep all values between 0 and 10^6 (would it be better to throw away everything out of this range?)
// use a linked list to store the key at the same index for collisions

class ListNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class HashSet {
    constructor() {
        this.set = Array.from({ length: 10000 }, () => new ListNode(0));
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    hash(key) {
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    add(key) {
        // set the current value at its hashed index
        let curr = this.set[this.hash(key)];
        // starting after the dummy node
        while (curr.next) {
            // if the key is the key given, then its a duplicate and we don't add it
            if (curr.next.key === key) {
                return;
            }
            // continue the search
            curr = curr.next;
        }
        // add a new node at the key
        curr.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let curr = this.set[this.hash(key)];
        while (curr.next) {
            // if you find the value
            if (curr.next.key === key) {
                // set the pointer to the next node (which deletes the value)
                curr.next = curr.next.next;
                return;
            }
        }
        curr = curr.next;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    contains(key) {
        let curr = this.set[this.hash(key)];
        while (curr.next) {
            if (curr.next.key === key) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}
