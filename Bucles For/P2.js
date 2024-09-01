/* Se trata de que dado un número entero el script 
muestre una cuenta atrás, es decir, una lista de numeros 
separados por comas desde el número tecleado hasta el 0. */

let contar, max, msg='';

max = parseInt(prompt('Ingresa un numero:'));

for (contar = max; contar > 0; contar-- ){
    msg += contar + ' , ';
}

msg += contar;

alert(msg)