//Que hay debajo de un iterador?

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            const fin = ( i >= carrito.length );
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

//Definir array
const carrito = ['Manzanas', 'Uvas', 'Peras'];

//Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente()); //Manzanas
console.log(recorrerCarrito.siguiente()); //Uvas
console.log(recorrerCarrito.siguiente()); //Peras
console.log(recorrerCarrito.siguiente()); //Undefined