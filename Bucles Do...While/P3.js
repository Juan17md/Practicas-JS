/* En este script vas a crear un menu con tres opciones: 
escribir, leer, salir. El usuario elegirá una opción 
y en un alert se le indicará la opción elegida. 
El programa vuelve a mostrar el menu y se repite el proceso. 
El script acabará cuando se pulse la opción de salir. */

let opcion = '';

do {
    opcion = prompt('1.- Escribir\n2.- Leer\n3.- Salir\nEscoge una opcion:');

    switch (opcion) {
        case '1':
            alert('Eliges Escribir');
            break;
        case '2':
            alert('Eliges Leer');
            break;
        case '3':
            alert('Fin del Programa');
            break;
        default:
            alert('Opcion no valida')
    }

} while (opcion != '3');