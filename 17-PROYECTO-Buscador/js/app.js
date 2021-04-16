//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para resultado
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear(); //Obtiene año actual
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year : '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
};

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //Muestra todos los carros
    //Llenar select de años
    llenarSelect();
});

//Marca
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});
//Año
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();
});
//Mínimo
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});
//Máximo
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});
//Puertas
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
});
//Transmisión
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});
//Color
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//Funciones
function mostrarAutos(autos){

    limpiarHtml(); //Elimina HTML previo

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = ` 

            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}

        `;
        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}
//Limpiar HTML
function limpiarHtml(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Llena el select con los años
function llenarSelect(){

    for( let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion); //Agrega las opciones al HTML
    }
}

//Funcion que filtra en base a la búsqueda
function filtrarAuto(){
const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor)

    if (resultado.length){
        mostrarAutos(resultado);
    }
    else{
        noResultado();
    }
}

function noResultado(){

    limpiarHtml();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultados, intenta de nuevo';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if ( marca ){
        return auto.marca === marca; // marca del array === marca del select
    }
    return auto;
}

function filtrarYear(auto){

    const { year } = datosBusqueda;
    if ( year ) {
        return auto.year === parseInt(year); 
    }
    return auto;
}

function filtrarMinimo(auto){

    const { minimo } = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= minimo; 
    }
    return auto;
}

function filtrarMaximo(auto){

    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo; 
    }
    return auto;
}

function filtrarPuertas(auto){

    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas; 
    }
    return auto;
}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision; 
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color; 
    }
    return auto;
}


























