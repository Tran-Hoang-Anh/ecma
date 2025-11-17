
// BÀI 1: Lấy thông tin name và email từ object user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const {
    personalInfo: {
      name,
      contact: { email }
    }
  } = user;

  return { name, email };
}

console.log(getUserInfo(user));

// BÀI 2: Hàm tạo sản phẩm với tham số default + destructuring
function createProduct({ name, price, category = "general", inStock = true }) {
  return {
    name,
    price,
    category,
    inStock
  };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);