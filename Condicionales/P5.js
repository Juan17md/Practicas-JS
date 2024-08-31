/* Una tienda aplica un descuento del 15% para las compras que incluyan 
más de 10 artículos iguales cuyo precio sea superior a 40 euros. 
Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número 
de artículos y el precio de cada uno. */

var articulos, precio, factura, descuento;

articulos = parseInt(prompt("Cuantos articulos comprara: "));
precio = parseInt(prompt("Cual es el precio de los articulos a comprar: "));
factura = precio*articulos;

if (articulos > 10 && precio > 40){
    factura = factura - ((factura * 15) / 100)
} 

console.log("El total a pagar es de: " + factura);
