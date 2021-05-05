//Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
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
    
    //Instanciar seguro

    //Utilizar el prototype que va a cotizar..

}



















