const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeech);

function ejecutarSpeech(){
    const spechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart() = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando';
    }

    recognition.onspeeched() = function() {
        salida.textContent = 'Se dejó de grabar';
        recognition.stop();
    }

    recognition.onresult = function(e) {
        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${ transcript }`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${ parseInt(confidence * 100) }`;

        salida.appendChild(speech);
    }
}