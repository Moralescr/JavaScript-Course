const cliente = {
    nombre: 'Adrian',
    edad: 24,
}

function Cliente(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

const adrian = new Cliente('Adrian', 15);

function formateaCliente(cliente){

    const {nombre, edad} = cliente;
    return `Él cliente ${nombre} tiene una edad de ${edad}`;
}

console.log( formateaCliente(adrian) );


function formateaEmpresa(empresa){

    const {nombre, edad, categoria} = empresa;
    return `La empresa ${nombre} tiene una edad de ${edad} y su catergoria es ${categoria}`;
}

function Empresa(nombre, edad, categoria){
    this.nombre = nombre;
    this.edad = edad;
    this.categoria = categoria;
}

const empresaObj = new Empresa('Clai', 27, 'Tecnologia');
console.log(empresaObj); 