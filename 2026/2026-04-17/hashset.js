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

a hashset means you can add many things to a data structure without increasing the size of the array
so you create buckets and then add linked lists to that bucket
use modulo to deal with collisions
*/

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
        console.log(`add(${key})`);
        const hashIndex = this.hash(key);
        console.log(`hashIndex: ${hashIndex}, hash function result`);
        let curr = this.set[this.hash(key)];
        // why is this while curr.next
        while (curr.next) {
            console.log(`checking curr.next.key=${curr.next.key}, key=${key}`);
            if (curr.next.key === key) {
                console.log(`duplicate found, returning early`);
                return;
            }
            curr = curr.next;
        }
        console.log(`adding new node with key=${key}`);
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

const hashSet = new HashSet();
hashSet.add(1);
hashSet.add(10001);
hashSet.add(2);
console.log("contains(1)", hashSet.contains(1), "expect true");
console.log("contains(1)", hashSet.contains(3), "expect false");
hashSet.remove(2);
console.log("contains(2) after remove", hashSet.contains(2), "expect false");
console.log(hashSet);
