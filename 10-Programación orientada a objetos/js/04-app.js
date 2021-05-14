//Propiedades privadas
class Usuario {

    #nombre; //Privado

   setNombre(nombre){
       this.#nombre = nombre;
   }

   getNombre(){
       return this.#nombre;
   }
}

const adrian = new Usuario();
//console.log(adrian.nombre); //No se puede acceder
adrian.setNombre('Adrian Morales');
console.log(adrian.getNombre());