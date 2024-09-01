/* Se trata de crear una aplicación que calcule 
la suma de todos los números enteros positivos 
entre 0 y el número tecleado por el usuario. 
El resultado será de la forma "Los números enteros 
de 0 a n  suman suma" */

let max, suma, ctrl;

max = parseInt(prompt('Escribe un numero entero positivo:'));

suma = 0;

for (ctrl = 0; ctrl <= max; ctrl++){
    suma += ctrl;
}

alert('Los numeros enteros de 0 a ' + max + ' suman ' + suma);