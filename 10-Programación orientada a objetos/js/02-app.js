//Conocida como: Class declaration
class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad   = edad;
    }
    //Solo instanciando la clase se puede acceder
    mostrarInformacion(){
        return `Usuario: ${this.nombre} tiene una edad de ${this.edad}`;
    }

    //No hay necesidad de instaciarla para su llamado
    static bienvenida(){
        return `Bienvenidos a mi página`;
    }
}

const adrian = new Usuario('Adrian', 24);
console.log(adrian.mostrarInformacion());
console.log(adrian);
console.log(Usuario.bienvenida());

//-----------------------------------------------------------------------
//Conocida como: Class expression
//-----------------------------------------------------------------------
const Usuario2 = class {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad   = edad;
    }

     //Solo instanciando la clase se puede acceder
     mostrarInformacion(){
        return `Usuario: ${this.nombre} tiene una edad de ${this.edad}`;
    }

    //No hay necesidad de instaciarla para su llamado
    static bienvenida(){
        return `Bienvenidos a mi segunda página`;
    }
}

const adrian1 = new Usuario2('Adrian', 24);
console.log(adrian1.mostrarInformacion());
console.log(adrian);
console.log(Usuario2.bienvenida());




