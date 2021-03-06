//imr
import React, { useState } from 'react';
import { calcularTotal } from '../helpers';

//sfc
const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando} = props;

    //Definir state
    const [error, guardarError] = useState(false);

    //Cuando el usuario haece submit
    const calcularPrestamo = e => {
        e.preventDefault();

        //Validar
        if (cantidad === 0 || plazo === '') {
            guardarError = true;
        } 

        //habilitar spinner
        guardarCargando (true);

        setTimeout( ()=>{
            //Realizar cotización
            const total = calcularTotal(cantidad, plazo);

            //Una vez calculado se guardar total
            guardarTotal(total);

            //Desahabilitar spinner
            guardarCargando(false);
            
        }, 3000) 

    }

    return ( 
        <form onSubmit = {calcularPrestamo}>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={ e => guardarCantidad(parseInt(e.target.value)) }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={ e => guardarPlazo(parseInt(e.target.value)) }>
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
        </form>
     );
}
 
export default Formulario;