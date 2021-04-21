//Obtener valores de localStorage

const nombre = localStorage.getItem('Nombre');
console.log(nombre);

//Obtener string y pasarlo a objeto
 
const productoJSON = localStorage.getItem('Producto');
console.log(JSON.parse( productoJSON ));

//Obtener string y pasarlo a arreglo

const productoJSON = localStorage.getItem('Meses');
console.log(JSON.parse( productoJSON ));