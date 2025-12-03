const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng vào ngày ${new Date(user.orderDate).toLocaleDateString('vi-VN')}.
Thông tin đơn hàng:
- Sản phẩm: ${user.product}
- Giá: ${user.price.toLocaleString('vi-VN')}₫

Chúng tôi sẽ thông báo cho bạn khi đơn hàng được giao.

Trân trọng,
Bộ phận Hỗ trợ Khách hàng
`; // Viết template ở đây

console.log(emailTemplate);