// 3 Mostrar la suma elementos mayores a 10
let nums = [10, 50, 8, 4];
let suma = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10) {
    suma += nums[i];
  }
}

document.write(".  The sum of the elements greater than 10 is: " + suma);
