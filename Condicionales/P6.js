/* En este ejemplo el usuario tecleará dos números. 
Debe devolver la diferencia entre el mayor y el menor. */

var n1, n2;

n1 = parseInt(prompt('Ingrese un numero'))
n2 = parseInt(prompt('Ingrese un numero'))

if (n1 > n2) {
    console.log('La diferencia es de: ' + (n1 - n2));
} else {
    console.log('La diferencia es de: ' + (n2 - n1));
}