// importaciones
import React from 'react';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result'
import Functions from './components/Functions';
import './App.css'

// generación de la función del componente
const App = () => {

    //const clickHandlerFunction = text => console.log('Entro a la función clickHandlerFunction', text)

    const prueba = (operation) => {
        console.log('Entro a la función preba con el parametro : ', operation);
    }

    const resultOperation = (equal) => {
        console.log('Entro a la función resultOperation con el parametro : ', equal);
    }
    return (
        <main className="react-calculator">
            <Result value={"0"} />
            <Numbers onClickNumber={(number)=> console.log('Click en number: ', number )} />
            <Functions
                onContenClear={() => console.log('Content Clear')}
                onDelete={() => console.log('onDelete')}
            />
            <MathOperations
                onClickOperation={(operation) => prueba(operation)}
                onClickEquals={(equal) => resultOperation(equal)}
            />
        </main>
    )
}

// exportación
export default App;