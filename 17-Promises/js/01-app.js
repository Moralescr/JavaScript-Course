const clientes = ['Carlos', 'Jorge', 'Pedro', 'Juan'];

function nuevoCliente(cliente, callback){
    setTimeout(()=>{
        clientes.push(cliente);
        callback();
    }, 2000)
}

function mostrarClientes(){

    setTimeout( ()=> {
        clientes.forEach(cliente => {
            console.log(clientes);
        });
    }, 1000)
}

mostrarClientes();
nuevoCliente('Adrian', mostrarClientes);
