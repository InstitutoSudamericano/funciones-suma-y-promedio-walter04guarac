// 1 Mostrar la suma elementos impares
function sumOnlyPairs(list){
  let sum=0;
  for(let i=0;i<list.length;i++){
    if(list[i]%2!==0){
        sum+=list[i];
    }
  }
  return sum;
}
let list=[10,50,8,4];
let resultOne= sumOnlyPairs(list);
document.write("The sum of the odd elements of the first array is: "+resultOne+"<br>");
let last=[3,5,8,4];
let resultTwo=sumOnlyPairs(last);
document.write(".  the sum of the odd elements of the second array is: "+resultTwo+"<br>");