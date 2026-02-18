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

// node
// value, next
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class HashSet {
    constructor() {
        this.set = Array.from({ length: 10000 }, () => new Node(0));
    }

    hash(key) {
        return key % this.set.length;
    }

    add(key) {
        const index = this.hash(key);
        console.log(`adding key ${key}`);
        console.log(`targeting bucket index ${index}`);

        let curr = this.set[index];
        let step = 0;
        while (curr.next) {
            step++;
            console.log(
                `Step ${step}: checking node with key ${curr.next.key}`,
            );

            if (curr.next.key === key) {
                console.log(`Result: key ${key} is a duplicate, abording add`);
                return;
            }
            curr = curr.next;
        }
        curr.next = new Node(key);
        console.log(
            `result: key ${key} not found in chain, appended new node at the end`,
        );
    }
}

const set = new HashSet();
set.add(1);
set.add(10001);
set.add(2);
set.add(2);
