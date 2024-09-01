/* En este ejercicio el script convertirá las notas numéricas 
de un examen en paabras: 0 - 4 suspenso, 5-6 aprobado, 
7-8 notable, 9-10 sobresaliente. */

let nota, msg;

nota = parseInt(prompt('Ingresa la nota obtenida:'));

switch(true){

    case (nota < 5):
        msg = 'Suspendido';
        break;

    case (nota >= 5  && nota < 7):
        msg = 'Aprobado';
        break;

    case (nota >= 7 && nota < 9):
        msg = 'Notable';
        break;

    case (nota >= 9 && nota <= 10):
        msg = 'Sobresaliente';
        break;

    default:
        msg = 'Valor Incorrecto'
}

alert('Tu nota fue: ' + msg)