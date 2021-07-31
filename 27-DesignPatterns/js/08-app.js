function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo: ${articulo}, el precio es $${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta(){
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//crear objetos
const adrian = new Comprador('Adrian');
const enrique = new Comprador('Enrique');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();


//Registrarlos
subasta.registrar(adrian);
subasta.registrar(enrique);
subasta.registrar(vendedor);

vendedor.oferta('Mustang', 3600);

adrian.oferta(4000, adrian);
enrique.oferta(4500, enrique);

vendedor.vendido('Enrique');
