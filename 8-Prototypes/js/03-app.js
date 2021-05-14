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

//Instancia
const adrian = new Cliente('Adrian', 24);
console.log(adrian.tipoCliente());
console.log(adrian.nombreEdadTipo());
adrian.edadA(2);
console.log(adrian.nombreEdadTipo());

console.log(adrian);

