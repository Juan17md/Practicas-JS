/* En este script se le pide al usuario que teclee dos números, el script mostrará la suma y pedirá al usuario si queire repetir. Si teclea S repite y si teclea N el programa sale. No debe aceptar otras teclas */

let resp = '', n1 = '', n2 = '';

do {

    n1 = parseInt(prompt('Ingrese el primer numero: '));
    n2 = parseInt(prompt('Ingrese el segundo numero: '));

    alert('La suma de los dos numeros es igual a: ' + (n1 + n2));

    do {
        resp = prompt('Quieres seguir en el programa?');
    } while (resp != 'S' && resp != 'N');

} while (resp == 'S');