
export const nombreCliente = 'Adrian';
export const ahorro = 20000;


export function mostrarInformacion(nombre, ahorro){
    return `Cliente ${nombre} - Ahorro ${ahorro}`;
}

export function tieneSaldo(){
    if (ahorro > 0){
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
 }

export class Cliente {
    
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro}`;
    }
}


export default function nuevaFuncion(){
    console.log('export default');
}
