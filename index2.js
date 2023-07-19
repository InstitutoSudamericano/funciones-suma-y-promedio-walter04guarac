//ejercicio-2 promedio
let m1=76;m2=63;m3=85;comp=70;
function showMesage(m1,m2,m3){
  prom=(m1+m2+m3)/3;
  if(prom>=comp){
    return"Aprobado"
  }else{
    return"Reprobado"
  }
}
let salida;
salida=showMesage(m1,m2,m3);
alert(salida)