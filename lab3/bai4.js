
const shoppingCart = (customerName, ...products) => {
  return {
    customerName,
    products,
    totalItems: products.length,
  };
};

const cart = shoppingCart(
  "Nguyễn Văn A",
  "Laptop",
  "Chuột",
  "Bàn phím"
);

console.log(cart);
