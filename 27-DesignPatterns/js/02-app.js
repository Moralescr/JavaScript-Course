//Constructor pattern

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

cliente = new Cliente('Adrian', 'Morales@gmail.com', 'moralescr.tech');
console.log(cliente);