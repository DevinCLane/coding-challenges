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

// create a hash table
// for collisions, use % to set multiple nodes in the same index position. so you'll have a linked list

class ListNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class HashSet {
    constructor() {
        // set a dummy node in each position
        this.set = Array.from({ length: 10000 }, () => new ListNode(0));
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    hash(key) {
        // this way every number will be from 0 to 9999
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    add(key) {
        // set the current node's index
        let curr = this.set[this.hash(key)];
        // looking past the dummy node to the next node
        while (curr.next) {
            // if it already exists, we just return (hash sets don't have duplicates)
            if (curr.next.key === key) {
                return;
            }
            curr = curr.next;
        }
        // set the next node as the
        curr.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        let curr = this.set[this.hash(key)];
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
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
