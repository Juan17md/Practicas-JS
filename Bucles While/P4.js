/* Determinar si el número que teclea el usuario 
es primo o no. Recordar que un número primo es el que 
solo puede dividirse por si mismo y por la unidad. */

let numero, resto, divisor = 2, esPrimo = 'Si';

numero = parseInt(prompt('Ingresa un numero:'));

while((divisor <= numero) && (numero % divisor != 0)){
    divisor++;
}

if (divisor < numero){
    esPrimo = 'No';
}

console.log('El numero ' + numero + ': ' +esPrimo + ' es primo');
