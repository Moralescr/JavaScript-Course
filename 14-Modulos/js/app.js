import nuevaFuncion, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';
//Variables
console.log(clienteNombre);
console.log(ahorro);

nuevaFuncion();

//Funciones
console.log( mostrarInformacion(clienteNombre, ahorro) );

tieneSaldo(ahorro);

//Clases
const cliente = new Cliente(clienteNombre, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());

//Import de empresa
const empresa = new Empresa('Web', 200, 'moralescr');

console.log(empresa.mostrarInformacion());
