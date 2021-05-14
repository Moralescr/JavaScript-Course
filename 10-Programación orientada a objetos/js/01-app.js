//Conocida como: Class declaration
class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad   = edad;
    }
}

const adrian = new Usuario('Adrian', 24);
console.log(adrian);


//-----------------------------------------------------------------------
//Conocida como: Class expression
//-----------------------------------------------------------------------
const Usuario2 = class {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad   = edad;
    }

}

const adrian1 = new Usuario2('Adrian', 24);

console.log(adrian);





