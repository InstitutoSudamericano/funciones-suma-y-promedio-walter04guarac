// 2 Mostrar suma donde los indices sean pares
let nums = [10, 50, 8, 4];
let suma = 0;

for (let i = 0; i < nums.length; i++) {
  if (i % 2 === 0) {  // Verificar si el índice es par
    suma += nums[i];
  }
}
document.write(".  The sum of the elements in the even indices is: " + suma);
