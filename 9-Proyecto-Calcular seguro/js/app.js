//Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(){
 
    /*
        1- Americano 1.15
        2- Asiatico 1.05
        3- Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
        cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //Leer el año 
    const diferencia = new Date().getFullYear() - this.year;
    
    //Cada año que la diferencia es mayor, el costo se reduce en un 3%
    cantidad -= (( diferencia * 3)* cantidad) / 100; 

    /*
        Si el seguro es basico se multiplica por un 30% mas
        Si el seguro es basico se multiplica por un 50% mas 
    */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    return cantidad;    
}

function UI(){}

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        selectYear.appendChild(option);
    }
}
//Muestra alertas en la pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');
    
    if (tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(()=>{
        div.remove();
    }, 3000);

}

UI.prototype.mostrarResultado = (total, seguro) =>{

    const {marca, year, tipo} = seguro;
    let nombreMarca;

    switch(marca){
        case '1':
            nombreMarca = 'Americano';
            break;
        case '2': 
            nombreMarca = 'Asiatico';
            break;
        case '3':
            nombreMarca: 'Europeo';
            break;
        default:
            break;
    }
    //Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header"> Tu resumen </p>
        <p class="font-bold"> <span class="font-normal"> Marca:  ${nombreMarca} </span> </p>
        <p class="font-bold"> <span class="font-normal"> Año:  ${year} </span> </p>
        <p class="font-bold"> <span class="font-normal capitalize"> Tipo: ${tipo} </span> </p>
        <p class="font-bold"> <span class="font-normal"> Total: $ ${total} </span> </p>
    `;

    const resultadoDiv = document.querySelector('#resultado');  

    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout( () => {
        spinner.style.display = 'none'; //Se borra spinner pero se muestra resultado
        resultadoDiv.appendChild(div);
    }, 3000);

}

//Instancia de UI
const ui = new UI();

//Event listener
document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});

eventListeners();
function eventListeners(){

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro); 
}

function cotizarSeguro(e){

    e.preventDefault();
    
    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name= "tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    } 

    ui.mostrarMensaje('Cotizando', 'exito');

    //Ocultar cotizaciones previas
    const resulatdos = document.querySelector('#resultado div')
    if (resulatdos != null){
        resulatdos.remove();
    }
    
    //Instanciar seguro
    const seguro = new Seguro(marca, year, tipo);
    const total =  seguro.cotizarSeguro();

    //Utilizar el prototype que va a cotizar..

    ui.mostrarResultado(total, seguro)
}




















