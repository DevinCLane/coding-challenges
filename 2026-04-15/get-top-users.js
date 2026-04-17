/* 
You are given this endpoint:

https://jsonmock.hackerrank.com/api/transactions

Each page returns:

{
  "page": 1,
  "per_page": 10,
  "total": 100,
  "total_pages": 10,
  "data": [
    {
      "id": 1,
      "userId": 1,
      "userName": "Alice",
      "timestamp": 1620000000,
      "txnType": "credit",
      "amount": "$1,234.56",
      "location": {
        "id": 1,
        "address": "NY"
      }
    }
  ]
}
❓ Task

Write an async function:

async function getTopUsers(threshold) {}
Requirements:
Fetch all pages of transactions
For each userName, compute:
total credit amount (ignore debit)
Return a list of userNames where:
total credit > threshold
Sort result:
by total credit descending
if tie → sort by userName alphabetically
*/
const apiResponse = [];
let page = 1;
async function getData() {
    const url = `https://jsonmock.hackerrank.com/api/transactions?page=${page}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }
        const result = await response.json();
        apiResponse.push(result);
        while (page < result.total_pages) {
            page++;
            getData();
        }
        console.log(apiResponse);
    } catch (error) {
        console.error(error.message);
    }
}

async function getTopUsers(threshold) {
    const data = await getData();
    console.log(data);
}

getData();
