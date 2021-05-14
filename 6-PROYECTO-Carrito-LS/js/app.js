//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito =  document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos"); 

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);

    //Muestra los cusrsos de localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []; //Se resetea arreglo
        limpiarHTML(); // se muestra vacío
    });
}

// Funciones 
function agregarCurso(e){

    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Eliminar curso del carrito
function eliminarCurso(e){
    if (e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

   //Eliminar del arreglo: Trae los datos que no coincidan por lo tanto elimina del arreglo el id que coincide
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML(); //Se muestra actualizado
    }
}

function leerDatosCurso(curso){
    // Crea objeto con el contenido actual del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //Revisar si ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe){
        //Actualiza cantidad
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id ){
                curso.cantidad ++;
                return curso; // Devuelve registro actualizado
            } else {
                return curso; //Devuelve registro que no coincide
            }
        });
        // Se copia el registro actualizado 
        articulosCarrito = [...cursos];

    } else {
        // Agregar alementos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
}

//Muestra carrito de compras en HTML
function carritoHTML(){

    //Limpiar HTML
    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = ` 
            <td>
                <img src="${imagen}" width="100px"> 
            </td>   
            <td>
                ${titulo}
            </td>  
            <td>
                ${precio}
            </td> 
            <td>
                ${cantidad}
            </td> 
            <td> 
                <a href="#" class="borrar-curso" data-id="${id}"> X
            </td>
        `;

         //Agrega el HTML al carrito 
         contenedorCarrito.appendChild(row);
    });   
    //Sincronizar storage
    sincronizarCarrito();

}

//Sincronizar carrito
function sincronizarCarrito(){

    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Limpiar HTML
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
















