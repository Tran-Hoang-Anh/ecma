
// BÀI 1: Trả về phần tử đầu tiên và cuối cùng của mảng
function getFirstLast(array) {
  const [first, ...rest] = array;
  const last = rest[rest.length - 1];
  return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4])); 

// BÀI 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4
function swapElements(arr) {
  const newArr = [...arr];

  [newArr[1], newArr[3]] = [newArr[3], newArr[1]];

  return newArr;
}
console.log(swapElements([1, 2, 3, 4, 5]));
