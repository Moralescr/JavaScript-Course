const restaurantApp = {};


restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 20
    },
    {
        platillo: 'Hamburguesa',
        precio: 25
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    },
];

restaurantApp.funciones = {

    mostrarMenu: platillos => {
        console.log('Bienvenidos a nuestro menú');

        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo}: $${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`Tu platillo ${restaurantApp.platillos[id].platillo} se esta preparando...`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
    }
} 

restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlatillo('Taco', 40);

const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);
