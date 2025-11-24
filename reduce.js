const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

function countCategories(arr) {
  const result = arr.reduce((acc, item) => {

    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return result;
}

console.log(countCategories(categories));
