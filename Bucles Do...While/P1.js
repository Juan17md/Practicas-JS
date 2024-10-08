/* Realiza un script que le pida al usuario que teclee 
la letra A (en mayúscula) y mientras no lo haga se lo 
vuelva a pedir. Usa un bulce do..while y la ventana 
alert para los mensajes */

let tecla = '';

do {
    tecla = prompt('Ingresa una tecla: ');
} while (tecla != 'A');

alert('Has ingresado la letra correcta')