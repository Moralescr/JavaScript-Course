//Detectar si hay internet o no

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);


function actualizarEstado(){
    if (navigator.onLine){
        console.log('Con conexión a internet');
    } else {
        console.log('Sin conexión a internet');
    }
}