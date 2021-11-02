// importaciones
import React from "react";
import PropTypes from "prop-types";


// generación de la función del componente
const Result = ({value}) => {
    return (
        <div className="result">
            {value}
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

// estableciendo un valor por defecto... en los parámetros

Result.defaultProps = {
    value: "0"
}
// exportación
export default Result;