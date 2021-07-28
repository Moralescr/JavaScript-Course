const url = 'http://localhost:4000/clientes';


//Crear cliente
export const nuevocliente = async cliente => {

    try {

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
        
    } catch (error) {
        console.log(error);
    }

} 

//obtiene todos lood clientes

export const obtenerClientes= async() => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();

        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Eliminar clientes
export const eliminarCliente = async id => {

    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }

}

//Obtiene cliente por ID

export const obtenerCliente = async id => {

    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }

}

//Actualiza cliente

export const editarCliente = async cliente =>{

    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

