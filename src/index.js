import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import FormLoging from './Loging';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () =>{
    const[inicio, cambiarInicio] = useState(false);

    return(
        <>
            {inicio === true ? (
                <>
                    <h1>Hola a este login</h1>
                    <button onClick={()=> cambiarInicio(false)}>Cerrar Secion</button>
                </>
            ):(
                <>
                    <h1>Iniciar Secion</h1>
                    <FormLoging cambiarInicio={cambiarInicio}/>
                </>
            )}
        </>
    )
};
root.render(<Jsx/>);



