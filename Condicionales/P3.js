/* En este ejercicio debes pedir dos números enteros y devolver el cociente 
de dividir el primero entre el segundo, pero si este es cero no debe hacer 
la división, sino lanzar un mensaje de error */

var dividendo = parseInt(prompt("Ingrese el numero a dividir: "));
var divisor = parseInt(prompt("Ingrese el numero por el cual lo va dividir: "));
var cociente;

if (divisor != 0) {
    cociente = dividendo / divisor;
    alert("El resultado es = " + cociente);
    // console.log(dividendo + "/" + divisor + " = " + cociente);
} else {
    alert("No se puede dividir entre 0");
    // console.log("No se puede dividir entre 0");
}