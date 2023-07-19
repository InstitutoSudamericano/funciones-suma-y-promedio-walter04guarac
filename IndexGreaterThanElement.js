// 8 Mostrar la suma de los elementos donde el índice sea mayor al elemento
const nums = [0, 2, 1, 1];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  if (i > nums[i]) {
    sum += nums[i];
  }
}
document.write(".  The sum of the elements where the index is greater than the element is: ", sum);