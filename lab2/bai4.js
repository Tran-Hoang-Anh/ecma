// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML với template literals và nội suy biến/biểu thức
const productCard = `
<div class="product-card">
  <h2 class="product-name">${product.name}</h2>

  <p class="product-price">
    Giá gốc: <span class="original-price">${product.price.toLocaleString('vi-VN')}₫</span>
  </p>

  <p class="product-discount">Giảm: ${product.discount}%</p>

  <p class="product-final-price">
    Giá sau giảm: <strong>${finalPrice.toLocaleString('vi-VN')}₫</strong>
  </p>

  <p class="product-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}">
    ${product.inStock ? 'Còn hàng' : 'Hết hàng'}
  </p>

  <button ${product.inStock ? '' : 'disabled'}>Mua ngay</button>
</div>
`;

console.log(productCard);