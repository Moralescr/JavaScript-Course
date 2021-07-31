//Singleton: Solo se piueda instanciar una vez la clase

let instancia = null;

class Persona{
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            console.log('No se puedo instanciar');
        }
    }
}

const persona = new Persona('Adrian', 'moralesguadamuz@gmail.com');
console.log(persona);


const persona1 = new Persona('Karen', 'moralesguadamuz@gmail.com');
console.log(persona1);