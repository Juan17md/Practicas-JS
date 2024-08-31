/* Crea un programa que pida la nota de un estudiante 
en los tres trimestres del curso y calcule la nota promedio. 
El resultado que dará será Suspendido si la media es menor de 5, 
Aprobado si está entre 5 y 7 y  Notable por encima de 7. */

var nota1, nota2, nota3, prom;

nota1 = parseFloat(prompt('Ingrese la nota 1'));
nota2 = parseFloat(prompt('Ingrese la nota 2'));
nota3 = parseFloat(prompt('Ingrese la nota 3'));

prom = (nota1 + nota2 + nota3) / 3;

if (prom > 7) {
    console.log('Tu nota ha sido de : ' + prom +
        ' Felicidades, tu nota fue Notable');
} else if (prom <= 7 && prom >= 5) {
    console.log('Tu nota ha sido de : ' + prom +
        ' Has aprobado, sigue asi');
} else {
    console.log('Tu nota ha sido de: ' + prom +
        ' Has sido supendido, debes de estudiar mas');
    
}