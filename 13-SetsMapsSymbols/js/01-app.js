//Sets 
// Los objetos Set son colecciones de valores. Se puede iterar
// sus elementos en el orden de su inserción. 
// Un valor en un Set sólo puede estar una vez; éste es único en la colección Set .
const carrito = new Set(); //Cualquier valor

//Añadir valores

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

console.log(carrito);

// Comprobar si valor existe
console.log( carrito.has('Disco #3') ); //True - False

// Recorrer con forEach
carrito.forEach( producto => {
    console.log(producto);
});

// Eliminar valores
carrito.delete('Camisa');
console.log(carrito);

//Limpiar por completo 
carrito.clear();


// Del siguiente arreglo, eliminar los valores duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);

console.log(noDuplicados);

