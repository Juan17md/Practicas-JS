/* Usando un bucle while escribir un script que pida 
un valor entero y cree una lista con los números desde 
el 0 al valor tecleado. Luego deberá sacar esa lista 
con un alert. Los números se separarán por comas. */  


let clave, veces = 0,  acceso = 'pasar', msg;

while(clave != acceso && veces < 3){
    clave = prompt('Ingrese su clave:');
    if (clave === acceso){
        alert('Acceso concedido')
    } else {
        alert('Acceso denegado')
        veces++;
    }
}

if(veces == 3){
    alert('Alerta Intruso')
}
