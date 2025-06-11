/* 
Design HashMap

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

/**
 * time: O(1) for all operations, where operations are put, get, and removed
 * space: O(n) where n is the number of key value pairs stored
 */
class HashMap {
    constructor() {
        this.data = {};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @returns {number}
     */
    put(key, value) {
        if (this.data[key] !== undefined) {
            this.data[key] = value;
        } else {
            this.data[key] = value;
        }
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    get(key) {
        if (this.data[key] !== undefined) {
            return this.data[key];
        }
        return -1;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        if (this.data[key] !== undefined) {
            const removed = this.data[key];
            delete this.data[key];
            return removed;
        }
        return -1;
    }
}

const hashMap = new HashMap();
hashMap.put(1, 1); // The map is now [[1,1]]
console.log(hashMap);
hashMap.put(2, 2); // The map is now [[1,1], [2,2]]
console.log(hashMap);
hashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
console.log(hashMap);
hashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
console.log(hashMap);
hashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
console.log(hashMap);
hashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
console.log(hashMap);
hashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
console.log(hashMap);
hashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
console.log(hashMap);
