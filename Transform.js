const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Book", price: 40 },
  { name: "Headphones", price: 60 }
];

function processProducts(items) {
 
  const productNames = items.map((product) => product.name);

  items.forEach((product) => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames;
}

processProducts(products);
