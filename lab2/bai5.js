const width = 100;
const height = 200;
const color = "red";

// Viết lại với enhanced object literals
const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};