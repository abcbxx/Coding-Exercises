const products = [
  { id: 'P001', name: 'Keyboard', price: 50 },
  { id: 'P002', name: 'Mouse', price: 25 },
  { id: 'P003', name: 'Monitor', price: 200 },
];

const sales = [
  { productId: 'P002', quantity: 3 },
  { productId: 'P001', quantity: 5 },
  { productId: 'P002', quantity: 1 },
];

const calculateTotalRevenue = (productsList, salesList) => {
  // 1. Create a quick lookup map for prices
  const productPriceMap = productsList.reduce((map, product) => {
    map[product.id] = product.price;
    return map;
  }, {});

  // 2. Use reduce on sales to calculate total revenue
  return salesList.reduce((totalRevenue, sale) => {
    const price = productPriceMap[sale.productId] || 0; // Handle missing products
    const revenue = price * sale.quantity;
    return totalRevenue + revenue;
  }, 0);
};

// Expected Output: 350
console.log(calculateTotalRevenue(products, sales));