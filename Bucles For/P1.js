/* Usando un bucle for escribir un script que pida 
un valor entero y muestre en pantalla una lista de 
números desde el 0 al valor tecleado. Los números 
se separarán por comas. */

let contar, max, msg='';

max = parseInt(prompt('Escribe un numero:'));

for (contar = 0; contar < max; contar++){
    msg += contar + ' , ';
}

msg += contar; 

alert(msg);