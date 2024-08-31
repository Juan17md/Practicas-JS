/* Pues seguimos con los números. Escribe un script  que dado un número nos devuelva 
true si es un número par y false si es un número impar. No usar condiconales. */

var num = parseInt(prompt("Ingresa un numero:"));

var res = num % 2;
var par = res == 0;

console.log("¿El numero Ingresado es par? " + par);