//Symbols - Crear propiedad única - no son iguales nunca
const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('No son iguales');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y apellido con llaves del objeto
persona[nombre] = 'Adrian';
persona[apellido] = 'Morales';
persona.saldo = 2000;

//Acceder global
console.log(persona);
//Acceder parcial
console.log(persona[nombre]);

//Las propiedades que utilizan symbol no son iterables
for (let i in persona) {
    console.log(i);
}

//Definir descripción del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente(nombreCliente) = 'Adriano';

// todo el objeto
console.log(cliente);
// contenido de nombre de cliente
console.log(cliente[nombreCliente]);
// Descripción de nombre de cliente
console.log(nombreCliente);