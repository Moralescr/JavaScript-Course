//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event listeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

//Funciones
function agregarTweet(e){
    e.preventDefault();

    //Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validación
    if (tweet === ''){
        mostrarError('El mensaje no puede ir vacio');
    }

    //Añadir al arreglo tweets
    const tweetObj = {
        id: Date.now(),
        tweet,  //Se coloca solo uno para que llave y valor sean tweet
                //Se puede colocar tambien (tweet : tweet / text: tweet)    
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Agregar al HTML
    crearHTML();

    //Limpiar formulario
    formulario.reset();
}

//Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos
    setTimeout( ()=> {
        mensajeError.remove();
    }, 3000);
}

//Crear listado de tweets
function crearHTML(){
    //Se limpia HTML
    limpiarHTML();

    if (tweets.length > 0){
        tweets.forEach(tweet => {
            //Agregar botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcio1n de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear HTML
            const li = document.createElement('li');
            //Añadir texto
            li.textContent = tweet.tweet;
            //Asignar botón
            li.appendChild(btnEliminar);
            //Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega tweets a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Elimina un tweet
function borrarTweet(id){
    //Trae todos los demás excepto el seleccionado
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

// Limpiar HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}


























