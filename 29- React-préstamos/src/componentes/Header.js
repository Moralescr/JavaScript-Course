import React, {Fragment} from 'react';

function Header({titulo}) {  //Se aplica destructuring de props
    
    return (
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    );
}

//Otra forma de crear un componente

// const Header = ({titulo}) => {

//   return puede ser implicito es decir, solo retornar el html 
//     return (
//         <Fragment>
//             <h1>{ titulo }</h1>
//         </Fragment>
//     )

// }

export default Header;