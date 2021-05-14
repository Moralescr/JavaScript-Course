//Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

eventListener();

function eventListener(){
    //Cuando la app inicia
    document.addEventListener("DOMContentLoaded", iniciarApp);

    // Resetear formulario
    btnReset.addEventListener('click', resetearFormulario);

    //Campos del formulario / blur = se ejecuta función una vez se salga del input
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}

//Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50º');
}

//Valida formulario

function validarFormulario(e){

    if(e.target.value.length > 0){
        //Elimina errores
        const error = document.querySelector('p.error');
        if (error){
            error.remove();
        }
        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        
    } else {

        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email'){
       
        if (er.test( e.target.value )) {
            //Elimina errores
            const error = document.querySelector('p.error');
            if (error){
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');

        } else {

            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
        }
    }

    if (er.test( email.value ) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }

}

//Muestra mensaje de error

function mostrarError(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if (errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

function enviarEmail(e) {
   e.preventDefault();

   // Mostrar el spinner

   const spinner = document.querySelector('#spinner');
   spinner.style.display = 'flex';

   //Despues de 3 segundos oculta el spinner
   setTimeout( ()=> {
        spinner.style.display = 'none';
        
        //Mensaje de envío correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje enviado exitosamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        formulario.insertBefore(parrafo, spinner);

        setTimeout( ()=> {
            parrafo.remove();
            resetearFormulario();
        }, 5000);

   }, 3000);

}

///Función que resetea formulario
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}


















