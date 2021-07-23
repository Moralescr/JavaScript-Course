document.addEventListener('visibilitychange', ()=> {
    if(document.visibilityState === 'visible'){
        console.log('Reproduce vídeo');
    } else {
        console.log('Pausar vídeo');
    }
});