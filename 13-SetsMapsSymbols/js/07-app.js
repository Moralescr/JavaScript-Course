//Generador: Es una función que retorna un iterador
function *crearGenerador(){
    yield 1;
    yield 'Adrian';
    yield 2 + 1;
    yield true;
}

const iterador = crearGenerador();

console.log( iterador.next() );  //Throw 
console.log( iterador.next().value ); //Imprime primer valor
console.log( iterador.next() );  //Imprime value y done 
console.log( iterador.next().value ); //Imprime valor
console.log( iterador.next() );  //Imprime value = undefined porque ya no hay mas que leer
console.log( iterador.next() ); //Closed

//Generador para carrito de compras
function *generadorCarrito(){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['Uvas', 'Manzanas', 'Peras'];
const iteradorCarrito = generadorCarrito(carrito);
