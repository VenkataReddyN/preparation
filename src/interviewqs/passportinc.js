const R = require('ramda');


const operators =
[
  {
    "id": "c8301ad9-2753-4c37-96b6-af8ce25f629a",
    "legacy_id": "US111",
    "gateway": "passport_payments"
  },
  {
    "id": "4b9e2348-bc72-40ca-9d50-65a6c2464633",
    "legacy_id": "US222",
    "gateway": "passport_payments"
  },
  {
    "id": "f8dde3a2-69ee-472b-be4e-ab424b398586",
    "legacy_id": "US333",
    "gateway": "gateway_green"
  },
  {
    "id": "c961549c-423d-48ba-b72d-fb94e860432c ",
    "legacy_id": "US444",
    "gateway": "gateway_blue"
  },
  {
    "id": "62686d87-4ac6-4445-a2c2-581f6016fbdb",
    "legacy_id": "US555",
    "gateway": "gateway_blue"
  }
];

const transactions =
[
  {
    "id": "1",
    "product": "parking",
    "operator_id": "c8301ad9-2753-4c37-96b6-af8ce25f629a",
    "payment_date": "2021-08-01T12:00:00Z",
    "amount": "10000", // $100.00
    "transaction_type": "payment"
  },
  {
    "id": "2",
    "product": "parking",
    "operator_id": "c8301ad9-2753-4c37-96b6-af8ce25f629a",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "20000",
    "transaction_type": "payment"
  },
  {
    "id": "3",
    "product": "permits",
    "operator_id": "c8301ad9-2753-4c37-96b6-af8ce25f629a",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "30000",
    "transaction_type": "payment"
  },
  {
    "id": "4",
    "product": "parking",
    "operator_id": "c8301ad9-2753-4c37-96b6-af8ce25f629a",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "5000",
    "transaction_type": "refund"
  },
  {
    "id": "5",
    "product": "parking",
    "operator_id": "f8dde3a2-69ee-472b-be4e-ab424b398586",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "30000",
    "transaction_type": "payment"
  },
  {
    "id": "6",
    "product": "citations",
    "operator_id": "f8dde3a2-69ee-472b-be4e-ab424b398586",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "5000",
    "transaction_type": "refund"
  },
  {
    "id": "7",
    "product": "parking",
    "operator_id": "4b9e2348-bc72-40ca-9d50-65a6c2464633",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "30000",
    "transaction_type": "payment"
  },
  {
    "id": "8",
    "product": "parking",
    "operator_id": "4b9e2348-bc72-40ca-9d50-65a6c2464633",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "10000",
    "transaction_type": "refund"
  },
  {
    "id": "9",
    "product": "parking",
    "operator_id": "f8dde3a2-69ee-472b-be4e-ab424b398586",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "30000",
    "transaction_type": "payment"
  },
  {
    "id": "10",
    "product": "citations",
    "operator_id": "f8dde3a2-69ee-472b-be4e-ab424b398586",
    "payment_date": "2021-08-01T12:30:00Z",
    "amount": "5000",
    "transaction_type": "payment"
  },
];

// NOTE amount is in cents (100 = $1)

// Print total number of transactions per operator
// Print sum USD dollar amount of transactions per operator for parking product for operators using 'passport_payments'

const totalTran = {};
for(let i=0; i<transactions.length; i++ ) {
  if(totalTran[transactions[i].operator_id]) {
    totalTran[transactions[i].operator_id] = totalTran[transactions[i].operator_id] + 1;
  } else {
    totalTran[transactions[i].operator_id] = 1;
  }
}
console.log(totalTran);

const productSum = {};
for(let i of operators.filter(o => o.gateway =='passport_payments')) {
    for(let j of transactions) {
      if(j.product === "parking" && i.id === j.operator_id) {
        let amount = (j.transaction_type  === "payment") ? Number(j.amount) : -1 * Number(j.amount)
        console.log(amount);
        amount = amount/100;
        if(productSum[j.operator_id]) {
          productSum[j.operator_id] = productSum[j.operator_id] + amount;
        } else {
          productSum[j.operator_id] = amount;
        }
      }
    }
}

console.log(productSum);

console.log(transactions.length);
