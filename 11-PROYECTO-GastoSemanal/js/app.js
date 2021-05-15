// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    document.addEventListener('submit', agregargasto);
}

// Clases

 class Presupuesto{
     constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
     }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularRestante();
    }
 }

 class UI {

    insertarPresupuesto(cantidad){
        //Extraemos valores
        const {presupuesto, restante} = cantidad;

        //Agregamos al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;

    }

    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(()=>{
            divMensaje.remove();
        }, 3000);

    }

    agregarGastoListado(gastos){

        this.limpiarHTML(); //Elimina HTML previo

        //Iterar sobre gastos
        gastos.forEach(gasto => {

            const {cantidad, nombre, id} = gasto;
            
            //Crear <li>
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; //Coloca "data-id" 

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill" > ${cantidad} </span>`;

            //Botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto', 'btn-sm');
            btnBorrar.textContent = 'Borrar x';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML 
            gastoListado.appendChild(nuevoGasto);

        });
    
    }

    limpiarHTML(){

        while ( gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){

        const { presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if ( (presupuesto / 4) > restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if( (presupuesto / 2) > restante ) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }


        //Si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }

    }

 }

 //Intancias
 const ui = new UI();
 let presupuesto;


// Funciones
function preguntarPresupuesto(){

    const presupuestoUsuario = prompt('¿Cuál es su presupuesto?');

    if (presupuestoUsuario ==='' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload(); //Recarga la página...
    }

    // Presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    
    ui.insertarPresupuesto(presupuesto);
}

//Agregar gasto
function agregargasto(e){
    e.preventDefault();
    
    //Leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //Validar
    if (nombre === '' || cantidad == ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return; //No se ejecuta el resto dek código

    } else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida', 'error');

        return;
    }

    //Generar obj con el gasto - object literal enhanced

    const gasto =  { nombre, cantidad, id: Date.now() } //Lo contrario de destructuring

    //Añade el gasto
    presupuesto.nuevoGasto( gasto );

    //Imprimir alerta
    ui.imprimirAlerta('Gasto agregado correctamente');

    //Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.agregarGastoListado(gastos);

    //Imprime restante
    ui.actualizarRestante(restante);

    //Comprobar presupuesto
    ui.comprobarPresupuesto(presupuesto);

    //Resetear formulario
    formulario.reset();
}

//Eliminar gasto
function eliminarGasto(id){
    //Elimina del objeto
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.agregarGastoListado(gastos);

    //Imprime restante
    ui.actualizarRestante(restante);

    //Comprobar presupuesto
    ui.comprobarPresupuesto(presupuesto);
  
}