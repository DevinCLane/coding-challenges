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
        // get index by hashing
        const index = this.hash(key);
        console.log(`curent index is ${index}`);
        // grab the current bucket
        let current = this.set[index];
        console.log(`current bucket is ${JSON.stringify(current)}`);
        // if you need to search through the linked list (current.next signifies)
        while (current.next) {
            console.log(`current.next = ${current.next}`);
            if (current.key === key) {
                console.log(`current.key = key, ${current.key} = ${key}`);
                return;
            }
            current = current.next;
            console.log(
                `increment current to continue the search ${current} = ${current.next}`,
            );
        }
        console.log(
            `creating a new list node if there is no match \n current.next: ${JSON.stringify(current.next)} = ${JSON.stringify(new ListNode(key))}`,
        );
        current.next = new ListNode(key);
        console.log(
            `so now we have current: ${JSON.stringify(current)} and current.next ${JSON.stringify(current.next)}`,
        );
    }
}

const hashSet = new HashSet();
hashSet.add(1);
// hashSet.add(2);
// hashSet.add(3);
