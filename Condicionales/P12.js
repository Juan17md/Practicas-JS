/* Un comerciante hace descuentos a sus clientes de 
la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros un 10%
Si la compra supera los 500 euros le descuenta un 15% */

let monto, factura;

monto = parseInt(prompt('Ingrese el monto de la compra: '));

switch (true) {

    case (monto > 100):
        factura = monto;
        break;

    case (monto <= 100 && monto >= 300):
        factura = monto - ((monto * 5) / 100);
        break;

    case (monto < 300 && monto >= 500):
        factura = monto - ((monto * 10) / 100)
        break;

    
}