const notificacion = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{
    Notificacion
    .requestPermission()
    .then( resultado => {
        console.log('El resultado es', resultado);
    })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación', {
            body: 'Moralecr - Adrian Morales',
        });

        notificacion.onclick = function(){
            window.open('https://www.moralescr.tech');
        }
    }
});


