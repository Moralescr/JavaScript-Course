//WeakMaps
const product = {
    idProducto = 10,
}

const weakmap = WeakMap();

weakmap.set(producto, 'Monitor');

console.log( weakmap.has(producto) );
console.log( weakmap.get(producto) );
console.log( weakmap.delete(producto) );

console.log(weakmap);