/* Aprtir de un número de mes tecleado por un usuario 
el programa debe indicar la estación del año.

Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 
6,7,8 verano y 9,10,11 otoño. */

var nMes, estacion;

nMes = parseInt(prompt('Ingresa el numero del mes: '));

switch (nMes){
    case 12:
    case 1: 
    case 2:
        estacion = 'Invierno';
        break;
    
    case 3: 
    case 4:
    case 5:
        estacion = 'Primavera';
        break;

    case 6:
    case 7:
    case 8:
        estacion = 'Verano';
        break;

    case 9:
    case 10:
    case 11:
        estacion = 'Otoño';
        break;

    default: 
    estacion = 'Estacion Desconocida'
}

alert('La estacion del año es: '+ estacion);