function Cliente(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    
    if(this.edad > 80){
        tipo = 'Adulto mayor';
    } else if(this.edad >= 30){
        tipo = 'Adulto';
    } else {
        tipo = 'Joven';
    }

    return tipo;
}

Cliente.prototype.nombreEdadTipo = function(){
    return `Nombre: ${this.nombre}, Edad:${this.edad}, Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.edadA = function(edadMenos){
    this.edad -= edadMenos;
}


function Persona(nombre, edad, telefono){
    Cliente.call(this, nombre, edad);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

//Instancia

const adrian = new Persona('Adrian', 24, '84932212');
console.log(adrian);
console.log(adrian.nombreEdadTipo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono es ${this.telefono}`;
}

console.log(adrian.mostrarTelefono());