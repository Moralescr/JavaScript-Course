const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([112, 333, 232, 323]);
const datos = new Map();

datos.set('Nombre', 'Adrian');
datos.set('Profesión', 'Ingeniero en sistemas');

//Default iterator
for ( ciudad of ciudades ) {
    console.log(ciudad);
}

for ( orden of ordenes ) {
    console.log(orden);
}

for (let dato of datos ) {
    console.log(dato);
}

//Entries iterator: Llave - valor
for (let entry of ciudades.entries() ) {
    console.log(entry);
}

for (let entry of ordenes.entries() ) {
    console.log(entry);
}

for (let entry of datos.entries() ) {
    console.log(entry);
}

// Values iterator: Valores
for (let value of ciudades.values() ) {
    console.log(value);
}

for (let value of ordenes.values() ) {
    console.log(value);
}

for (let value of datos.values() ) {
    console.log(value);
}

//Key iterator: Keys
for (let key of ciudades.keys() ) {
    console.log(key);
}
for (let key of ordenes.keys() ) {
    console.log(key);
}
for (let key of datos.keys() ) {
    console.log(key);
}