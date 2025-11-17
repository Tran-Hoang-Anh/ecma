const mergeArrays = (...arrays) => {
  return [].concat(...arrays);
};

const sumAll = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

const createProduct = ({
  name = "Unknown",
  price = 0,
  category = "General"
} = {}) => {
  return {
    name,
    price,
    category
  };
};

console.log(mergeArrays([1, 2], [3, 4], [5])); 

console.log(sumAll(1, 2, 3, 4, 5)); 

console.log(createProduct({ name: "Laptop", price: 1500 }));
