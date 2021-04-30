const diaHoy = new Date();

let valor; 
valor = diaHoy;

//get
valor = diaHoy.getFullYear(); //Muestra el año actual
valor = diaHoy.getMonth(); //Obtiene el numero de mes actual 
valor = diaHoy.getMinutes(); //Obtiene los minutos
valor = diaHoy.getHours(); //Obtiene las horas
valor = diaHoy.getTime(); //Obtiene el tiempo desde 1970 hasta la fecha
//set
valor = diaHoy.setFullYear(2021); //Establece el año actual

console.log(valor);