/* En este script se pedirá al usuario que teclee 
un número cada vez. El proceso acaba cuando teclee 
un 0 en cuyo caso además mostrará la suma de todos 
los números tecleados. */

let numero = 1, suma = 0;

while (numero != 0){
    numero = parseInt(prompt('Ingresa un numero:'));
    suma += numero;
}

alert('La suma de todos los numeros es igual a: ' + suma)