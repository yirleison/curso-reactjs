// importaciones
import React from "react";
import PropTypes from "prop-types";
import './Button.css'

// componente funcional
const Button = ({type, text, clickHandler}) => {

    const onClickFunctions = () => {
        console.log('Se ejecutó la función onClickFunctions del componente: Button');
        clickHandler(text);
    }

    return (
        
        <button className={type} onClick={()=>{onClickFunctions()}}>
            <span>{text}</span>
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string, 
    text: PropTypes.string.isRequired, 
    clickHandler: PropTypes.func.isRequired
}

//exportación
export default Button;