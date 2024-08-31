/* El usuario debe introducir dos valores numéricos por teclado y 
la aplicación deberá indicar cual es el mayor, el primero o el segundo.

La idea es usar las sentencias if reducidas (cond ? ture:false) */

var n1, n2, mayor; 

n1 = parseInt(prompt('Ingrese el primer numero:'))
n2 = parseInt(prompt('Ingrese el segundo numero:'))

mayor = (n1 > n2) ? 'primer' : 'segundo'

alert('El ' + mayor + ' numero es mayor')