let creditos, acceso='Salas: ';

creditos = parseInt(prompt("¿Cuántos créditos vas a pagar?"));

switch (creditos){
    case 4:
        acceso += "Realidad Virtual, ";
    case 3:
        acceso += "Juegos 3D, ";
    case 2:
        acceso += "Juegos 2D, ";
    case 1:
        acceso += "Consolas, ";
        break;
    default:
        acceso += "Ninguna";
}

alert(acceso);