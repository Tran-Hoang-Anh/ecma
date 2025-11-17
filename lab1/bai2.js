function createBook(title, author, year, price) {
  const createdAt = "created_at";

  return {
    title,
    author,
    year,
    price,

    [createdAt]: new Date().toLocaleDateString(),

    getBookInfo() {
      return `📘 ${this.title} - ${this.author} (${this.year}) - Giá: ${this.price}₫`;
    },

    calculateDiscount(discount) {
      const finalPrice = this.price * (1 - discount / 100);
      return `Giá sau giảm ${discount}%: ${finalPrice.toLocaleString()}₫`;
    }
  };
}

const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);

console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
