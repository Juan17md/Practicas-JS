/* Este script debe escribir la tabla de multiplicar 
del número que el usuario teclee. La tabla mostrará 
en diferentes líneas cada producto y el resultado 
en la forma a x b = ab.

Recuerda que el salto de linea es el carácter "\n" */

let base, contador, prefijo, producto, msg='';

base = parseInt(prompt('Que tabla quisiera visualizar?'));

prefijo = base + ' X ';

for(contador =1; contador <= 10; contador++){
    producto = base * contador;
    msg += prefijo + contador + ' = ' + producto + '\n'; 
}

alert('Tabla del ' + base + '\n' + msg)
