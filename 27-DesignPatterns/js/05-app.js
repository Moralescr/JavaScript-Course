//Module pattern

const modulo1 = (function(){
    const nombre = "Adrian";

    function hola(){
        console.log('hola');
    }

    return {
        nombre,
        hola
    }
})();
