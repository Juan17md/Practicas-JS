/* Este script el usuario deberá teclear una letra 
y un número, y el programa mostrará una cadena formada 
por la letra repetida el número que haya tecleado. */

let letra, veces, cont, msg='';

letra = prompt('Escribe una letra');

veces = parseInt (prompt('Escribe un entero'));

for (cont = 0; cont < veces; cont++){
    msg += letra;
}

alert(msg);