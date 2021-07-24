const cargarBtn = document.querySelector('#cargarTxt');
cargarBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/datos.txt';

    fetch(url)
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status); // 200
            console.log(respuesta.statusText); //OK
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text(); //json();
        })
        .then( datos => {
            console.log(datos);

        })
        .catch( error => {
            console.log(error);
        })
}