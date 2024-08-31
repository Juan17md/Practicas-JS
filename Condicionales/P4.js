/* En este ejemplo el usuario tecleará dos números. 
Debe devvolver la diferencia entre el mayor y el menor */

var num1 = parseInt(prompt("Teclear un número"));
var num2 = parseInt(prompt("Teclear un número"));
var resta;

if (num1 > num2) {
    resta = num1 - num2;
    console.log("Diferencia " + resta);
} else {
    resta = num2 - num1;
    console.log("Diferencia " + resta);
}