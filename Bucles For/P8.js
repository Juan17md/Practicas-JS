/* Programa un script que pida al usuario que teclee 
4 números (uno cada vez). Con esos números el programa 
deberá calcular la media aritmética. 
O sea la suma de los 4 números dividida entre 4 */

let numero, suma = 0, veces, media;

for (veces = 0; veces < 3; veces++) {
    numero = parseInt(prompt('Escribe un numero:'));
    suma += numero;
}

media = suma / 3;

alert('La media es de: ' + media);