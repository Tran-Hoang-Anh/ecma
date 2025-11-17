
const multiply = (a, b) => a * b;

const isPositive = number => number >= 0;

const getRandomNumber = () => Math.random();

document.addEventListener("click", () => {
  console.log("Clicked!");
});

console.log(multiply(3, 5));   
console.log(isPositive(-2));   
console.log(getRandomNumber()); 
