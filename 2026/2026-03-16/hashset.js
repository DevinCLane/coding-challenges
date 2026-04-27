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

use a linked list to store items
use % to store items together

1000000
*/

class ListNode {
    constructor(key) {
        // why is this key and not val
        this.key = key;
        this.next = null;
    }
}

class HashSet {
    constructor() {
        // why is the length in an object
        this.set = Array.from({ length: 10000 }, () => new ListNode(0));
    }

    // why does this take in a key and not a val
    hash(key) {
        return key % this.set.length;
    }

    add(key) {
        // get the current spot
        // go the array, look at the spot where the hash value is for this KEY
        // why is this called a key and not a val?
        // why is this an array and not an object
        let current = this.set[this.hash(key)];
        // why while current.next and not while current?
        // because if it's only current, that's just the key you are using right now
        // is current the value of the current key, so that's just the identifier for the name
        // of the linked list that is going to hold every actual value in it?
        // e.g., 1: 0, 1000, 2512, 2340
        while (current.next) {
            if (current.next.key === key) {
                return;
            }
            current = current.next;
        }
        current.next = new ListNode(key);
    }

    contains(key) {
        let current = this.set[this.hash(key)];
        while (current.next) {
            if (current.next.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    remove(key) {
        let current = this.set[this.hash(key)];
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        return null;
    }
}

const hashSet = new HashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.add(3);
console.log(hashSet);
