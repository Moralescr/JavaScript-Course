//Eliminar elementos de localStorage
localStorage.removeItem('Nombre');

//Actualizar registro 
const mesesArray = JSON.parse( localStorage.getItem('Meses') );
mesesArray.push('Mayo');
localStorage.setItem('meses', JSON.stringify(mesesArray));

//Limpiar LocalStorage
localStorage.clear();