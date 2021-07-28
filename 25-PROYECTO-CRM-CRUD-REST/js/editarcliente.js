import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function(){

    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmpresa = document.querySelector('#empresa');
    const inputId = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async ()=>{

        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt( parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        //Submit al form
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente)

    });

    function mostrarCliente(cliente){
        const {nombre, email, telefono, empresa, id} = cliente;

        inputNombre.value = nombre;
        inputEmail.value = email;
        inputTelefono.value = telefono;
        inputEmpresa.value = empresa;
        inputId.value = id;
    }

    function validarCliente(e){
        e.preventDefault();
        
        const cliente = {
            nombre: inputNombre.value,
            email: inputEmail.value ,
            telefono: inputTelefono.value,
            empresa: inputEmpresa.value, 
            id: parseInt(inputId.value) 
        }

        if( validar(cliente))
        {
            mostrarAlerta('Todos los campos son abligatorios');
            return;
        } 

        //Reescribe el objeto
        editarCliente(cliente);

    }

})();