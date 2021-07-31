

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
    }
}

//Añadir funcionesPersona a la clase persona
Object.assign(Persona.prototype, funcionesPersona);

persona = new Persona('Adrian', 'Correo@correo.com');

console.log(persona);

persona.mostrarInformacion();