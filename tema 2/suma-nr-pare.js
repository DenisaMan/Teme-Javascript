/* 
    Calculeaza folosind instructiunea While suma primelor n numere pare 
    EX: n=3 , numerele: 2, 4, 6 , suma = 12 
*/


let n = 7;

let suma = 0;
let par = 2;

while( n > 0) {
    suma = suma + par;
    par = par + 2;
    n--;
}
console.log("Suma primelor numere pare este:", suma );
