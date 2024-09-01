/* Usando un bucle while escribir un script que pida 
un valor entero y cree una lista con los números desde 
el 0 al valor tecleado. Luego deberá sacar esa lista 
con un alert. Los números se separarán por comas. */

let max, contar, lista;

max = parseInt(prompt('Ingresa un numero:'));

contar = 0;
lista = '';

while(contar < max){
    lista += contar + ', ';
    contar++;
}

lista += contar;

alert(lista)