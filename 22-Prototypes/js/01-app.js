//Menos dinamico
const cliente = {
    nombre: 'Adrian',
    edad: 24,
}

console.log(cliente);

//Mas dinamico

function Cliente(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

const adrian = new Cliente('Adrian', 15);

console.log(adrian);