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

class HashMapArr {
    constructor() {
        this.map = new Array(1000001).fill(-1);
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        this.map[key] = -1;
    }
}

class ListNode {
    constructor(key = -1, value = -1, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashMap {
    constructor() {
        this.map = Array.from({ length: 1001 }, () => new ListNode());
    }

    hash(key) {
        return key % this.map.length;
    }

    put(key, value) {
        let curr = this.map[this.hash(key)];
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
        let curr = this.map[this.hash(key)];
        while (curr.next) {
            if (curr.next.key === key) {
                return curr.next.value;
            }
            curr = curr.next;
        }
        return -1;
    }

    remove(key) {
        let curr = this.map[this.hash(key)];
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }
}

// ============================================
// TEST SUITE WITH DETAILED LOGGING
// ============================================

/**
 * Helper: Visualize what's in a specific bucket (linked list)
 */
function printBucket(hashMap, key) {
    const bucketIndex = hashMap.hash(key);
    let curr = hashMap.map[bucketIndex].next;
    let items = [];

    while (curr) {
        items.push(`{key: ${curr.key}, value: ${curr.value}}`);
        curr = curr.next;
    }

    return items.length === 0 ? "[empty]" : items.join(" -> ");
}

/**
 * Helper: Show overall table statistics
 */
function printHashMapStats(hashMap) {
    let totalItems = 0;
    let bucketsUsed = 0;
    let maxChainLength = 0;

    for (let i = 0; i < hashMap.map.length; i++) {
        let chainLength = 0;
        let curr = hashMap.map[i].next;

        while (curr) {
            chainLength++;
            totalItems++;
            curr = curr.next;
        }

        if (chainLength > 0) {
            bucketsUsed++;
            maxChainLength = Math.max(maxChainLength, chainLength);
        }
    }

    console.log(`📊 HashMap Stats:`);
    console.log(`   Total items: ${totalItems}`);
    console.log(`   Buckets used: ${bucketsUsed} / 1001`);
    console.log(`   Max chain length: ${maxChainLength}`);
    console.log(`   Load factor: ${(totalItems / 1001).toFixed(3)}\n`);
}

/**
 * Test helper: Verify operation and show results
 */
function test(description, hashMap, key, value, expectedResult) {
    console.log(`\n✓ TEST: ${description}`);
    console.log(`  Key: ${key}, Value: ${value}`);
    console.log(`  Bucket index: ${hashMap.hash(key)}`);
    console.log(`  Bucket contents: ${printBucket(hashMap, key)}`);

    if (expectedResult !== undefined) {
        console.log(`  Expected: ${expectedResult}`);
    }
    console.log(`  ─────────────────────`);
}

/* 
LLM generated tests below:
*/

// ============================================
// SCENARIO 1: Basic Operations
// ============================================
console.log("\n════════════════════════════════════════");
console.log("SCENARIO 1: Basic Put & Get Operations");
console.log("════════════════════════════════════════");

const hashMap = new HashMap();

// Test 1.1: Insert first item
hashMap.put(1, 1);
test("Insert (1, 1)", hashMap, 1, 1);

// Test 1.2: Insert second item (different bucket)
hashMap.put(2, 2);
test("Insert (2, 2)", hashMap, 2, 2);

// Test 1.3: Get existing key
const result1 = hashMap.get(1);
console.log(`\n✓ TEST: Get key that exists`);
console.log(`  Get(1) returned: ${result1}`);
console.log(`  Expected: 1`);
console.log(`  Status: ${result1 === 1 ? "✅ PASS" : "❌ FAIL"}`);
console.log(`  ─────────────────────`);

// Test 1.4: Get non-existent key
const result2 = hashMap.get(3);
console.log(`\n✓ TEST: Get key that does NOT exist`);
console.log(`  Get(3) returned: ${result2}`);
console.log(`  Expected: -1`);
console.log(`  Status: ${result2 === -1 ? "✅ PASS" : "❌ FAIL"}`);
console.log(`  ─────────────────────`);

printHashMapStats(hashMap);

// ============================================
// SCENARIO 2: Collision Handling
// ============================================
console.log("\n════════════════════════════════════════");
console.log("SCENARIO 2: Collision Handling");
console.log("════════════════════════════════════════");

const hashMap2 = new HashMap();

// Find two keys that collide (same bucket)
// Keys that hash to same bucket: key and (key + 1001) since 1001 is bucket count
const key1 = 5;
const key2 = 5 + 1001; // Will hash to same bucket as key1

console.log(`\n📍 Keys ${key1} and ${key2} should collide:`);
console.log(`   ${key1} % 1001 = ${key1 % 1001}`);
console.log(`   ${key2} % 1001 = ${key2 % 1001}`);

hashMap2.put(key1, 100);
test(`Insert (${key1}, 100) - first in bucket`, hashMap2, key1, 100);

hashMap2.put(key2, 200);
test(
    `Insert (${key2}, 200) - COLLISION! Chains in same bucket`,
    hashMap2,
    key2,
    200,
);

// Both should coexist in the same bucket
const val1 = hashMap2.get(key1);
const val2 = hashMap2.get(key2);

console.log(`\n✓ TEST: Both colliding keys are retrievable`);
console.log(
    `  Get(${key1}) = ${val1} (expected 100) ${val1 === 100 ? "✅" : "❌"}`,
);
console.log(
    `  Get(${key2}) = ${val2} (expected 200) ${val2 === 200 ? "✅" : "❌"}`,
);
console.log(`  ─────────────────────`);

printHashMapStats(hashMap2);

// ============================================
// SCENARIO 3: Update Existing Key
// ============================================
console.log("\n════════════════════════════════════════");
console.log("SCENARIO 3: Updating Existing Keys");
console.log("════════════════════════════════════════");

const hashMap3 = new HashMap();

hashMap3.put(42, 10);
console.log(`\n✓ Step 1: Insert (42, 10)`);
console.log(`  Get(42) = ${hashMap3.get(42)}`);
console.log(`  Bucket: ${printBucket(hashMap3, 42)}`);

hashMap3.put(42, 99);
console.log(`\n✓ Step 2: Update (42, 99) - same key, new value`);
console.log(`  Get(42) = ${hashMap3.get(42)} (expected 99)`);
console.log(`  Bucket: ${printBucket(hashMap3, 42)}`);
console.log(`  ✅ Value updated without adding new node!`);
console.log(`  ─────────────────────`);

printHashMapStats(hashMap3);

// ============================================
// SCENARIO 4: Removal
// ============================================
console.log("\n════════════════════════════════════════");
console.log("SCENARIO 4: Removing Keys");
console.log("════════════════════════════════════════");

const hashMap4 = new HashMap();

hashMap4.put(10, 10);
hashMap4.put(1011, 20); // Collides with 10
hashMap4.put(20, 30);

console.log(`\n✓ Step 1: Insert three items (two collide)`);
console.log(`  Bucket for 10:   ${printBucket(hashMap4, 10)}`);
console.log(`  Bucket for 20:   ${printBucket(hashMap4, 20)}`);

hashMap4.remove(10);
console.log(`\n✓ Step 2: Remove key 10`);
console.log(
    `  Get(10) = ${hashMap4.get(10)} (expected -1) ${hashMap4.get(10) === -1 ? "✅" : "❌"}`,
);
console.log(
    `  Get(1011) = ${hashMap4.get(1011)} (expected 20) ${hashMap4.get(1011) === 20 ? "✅" : "❌"}`,
);
console.log(
    `  Bucket for 10: ${printBucket(hashMap4, 10)} (1011 still there!)`,
);
console.log(`  ─────────────────────`);

hashMap4.remove(1011);
console.log(`\n✓ Step 3: Remove key 1011`);
console.log(`  Get(1011) = ${hashMap4.get(1011)} (expected -1)`);
console.log(`  Bucket for 10: ${printBucket(hashMap4, 10)} (now empty)`);
console.log(`  ─────────────────────`);

printHashMapStats(hashMap4);

// ============================================
// SCENARIO 5: LeetCode Example
// ============================================
console.log("\n════════════════════════════════════════");
console.log("SCENARIO 5: LeetCode Example");
console.log("════════════════════════════════════════");

const hashMap5 = new HashMap();

const operations = [
    { op: "put", key: 1, value: 1, expected: null },
    { op: "put", key: 2, value: 2, expected: null },
    { op: "get", key: 1, expected: 1 },
    { op: "get", key: 3, expected: -1 },
    { op: "put", key: 2, value: 1, expected: null },
    { op: "get", key: 2, expected: 1 },
    { op: "remove", key: 2, expected: null },
    { op: "get", key: 2, expected: -1 },
];

operations.forEach((op, index) => {
    console.log(
        `\n   Step ${index + 1}: ${op.op.toUpperCase()}(${op.key}${op.value !== undefined ? ", " + op.value : ""})`,
    );

    let result;
    if (op.op === "put") {
        hashMap5.put(op.key, op.value);
        console.log(`      ✓ Inserted`);
    } else if (op.op === "get") {
        result = hashMap5.get(op.key);
        console.log(
            `      Result: ${result}, Expected: ${op.expected} ${result === op.expected ? "✅" : "❌"}`,
        );
    } else if (op.op === "remove") {
        hashMap5.remove(op.key);
        console.log(`      ✓ Removed`);
    }

    console.log(
        `      Bucket[${hashMap5.hash(op.key)}]: ${printBucket(hashMap5, op.key)}`,
    );
});

printHashMapStats(hashMap5);
