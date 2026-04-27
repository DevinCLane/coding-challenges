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

// create an array with 10^6 positions
// create a hashing function that % the input
// create a class for list items
// store a linked list in each position

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

    hash(key) {
        return key % this.set.length;
    }

    add(key) {
        let curr = this.set[this.hash(key)];
        while (curr.next) {
            if (curr.next.key === key) {
                return;
            }
            curr = curr.next;
        }
        curr.next = new ListNode(key);
    }

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
