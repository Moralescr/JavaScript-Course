const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = true;

    if (descuento){
        resolve('Descuento aplicado');
    } else {
        reject('Descuento no aplicado');
    }
})

aplicarDescuento
        .then(resultado => descuento(resultado))
        .catch(error => descuento(error))

/*Hay 3 valores posibles
fulfilled - El promise se cumplió
rejected - El promise no se cumplió
pending - El promise no se cumplió ni tampoco fue rechazado

*/
function descuento(mensaje){
    console.log(mensaje);
}