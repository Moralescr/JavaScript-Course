//WeakSet
//No se pueden iterar
//No se pueden saber el tamaño

const weakset = new WeakSet; //Solo objetos

const cliente = {
    nombre: 'Adrian',
    saldo: 2000,
}

//Añadir
weakset.add(cliente);

//Comprobar si existe

weakset.has(cliente);

//Eliminar
weakset.delete(cliente);
