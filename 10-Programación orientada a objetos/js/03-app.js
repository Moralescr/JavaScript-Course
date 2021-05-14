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

//Herencia
class Empresa extends Usuario {
    constructor(nombre, edad, telefono, categoria){
        super(nombre, edad);
        this.telefono   = telefono;
        this.categoria  = categoria;
    }

    static bienvenida(){ //si se llaman iguales reescribe un método
        return `Bienvenidos a mi empresa`;
    }
}

const adrian = new Usuario('Adrian', 24);
const empresa = new Empresa('Còdigo con moralescr', 24, 84043853, 'en línea');

console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Usuario.bienvenida());
console.log(Empresa.bienvenida());




