/* Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche 
y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

var litros = parseFloat(prompt("Litros consumidos"));
var km = parseFloat(prompt("Kilómetros recorridos"));

var consumo = litros / km;

console.log("El consumo fue de " + consumo + " litros por km");

// alert("Consumo "+ consumo+" litros/km");   Muestra el mensaje de la misma forma que funciona el "Prompt"