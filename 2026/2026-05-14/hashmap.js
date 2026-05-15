/* 
10. Design HashMap

Design a HashMap without using any built-in hash table libraries.
Implement the MyHashMap class:
MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
Example 1:
Input: ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]

Output: [null, null, null, 1, -1, null, 1, null, -1]
Explanation:
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
Constraints:
0 <= key, value <= 1,000,000
At most 10,000 calls will be made to put, get, and remove.
*/

class ListNode {
    constructor(key = -1, value = -1, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashSet {
    constructor() {
        this.set = Array.from({ length: 10001 }, () => new ListNode());
    }

    hash(key) {
        return key % this.set.length;
    }

    put(key, value) {
        let curr = this.set[this.hash(key)];
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next.value = value;
                return;
            }
            curr = curr.next;
        }
        curr.next = new ListNode(key, value);
    }

    get(key) {
        let curr = this.set[this.hash(key)];
        while (curr.next) {
            if (curr.next.key === key) {
                return curr.next.value;
            }
            curr = curr.next;
        }
        return -1;
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
}
