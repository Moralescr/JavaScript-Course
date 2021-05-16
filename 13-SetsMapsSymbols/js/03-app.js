//Maps
// Un Map es un iterable lo que permite iterar directamente sobre el, mientras que si queremos iterar sobre un Object 
// necesitamos obtener primero las claves de alguna forma para después iterar sobre el.

const cliente = new Map();

cliente.set('nombre', 'Adrian');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 200);

console.log(cliente);

//Comprobar si existe
console.log( cliente.has('nombre') );

//Obtener valor
console.log( cliente.get('nombre') );

//Eliminar y limpiar
cliente.delete('saldo');
cliente.clear();


const paciente = new Map( [['nombre', 'paciente'], ['cuarto', 'no definido'] ] );

//Añade valor al map
paciente.set('dr.', 'Dr asignado');

//Sobre escribe valor
paciente.set('nombre', 'Allan');

console.log(paciente);

paciente.forEach( (datos, index) =>{
    console.log(index);
    console.log(datos);
});

