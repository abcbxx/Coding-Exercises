const transactions = [
  { item: 'Laptop', type: 'debit', amount: 1200 },
  { item: 'Headphones', type: 'debit', amount: 150 },
  { item: 'Refund', type: 'credit', amount: 300 },
  { item: 'Software', type: 'debit', amount: 450 },
  { item: 'Bonus', type: 'credit', amount: 1000 },
];

const calculateNetBalance = (transactionList) => {
  return transactionList.reduce((balance, transaction) => {
    if (transaction.type === 'debit') {
      return balance - transaction.amount;
    } else if (transaction.type === 'credit') {
      return balance + transaction.amount;
    }
    return balance;
  }, 0); // Initial balance is 0
};

// Expected Output: -500
console.log(calculateNetBalance(transactions));