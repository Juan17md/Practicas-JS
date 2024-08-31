/* Un programa que pida un número y diga si es positivo o negativo. 
El cero se considera positivo */

var num = parseInt(prompt("Ingresa un numero: "));

if (num >= 0) {
    console.log(num + " es positivo");
} else {
    console.log(num + " es negativo");
}