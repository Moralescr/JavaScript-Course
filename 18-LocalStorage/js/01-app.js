// Guardar en localStorage
localStorage.setItem('Nombre', 'Adrian Morales');

//Convertir objeto a string para guardar en localStorage
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 400,
    stock: 1
}

const productoString = JSON.stringify( producto );

localStorage.setItem('Producto', productoString);

//Convertir arreglo a string para guardar en localStorage
meses = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem('Meses', JSON.stringify( meses ));