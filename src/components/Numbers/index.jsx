import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

const Numbers = ({ onClickNumber }) => {

    /*
        DRY: Don't repeat yourself
        Cando el código se repite varias veces la idea es aplcar una lógica para crear
        sea una función generica o otro componente a parte.
    */
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    const renderButtos = onClickNumber => {
        return numbers.map((item) => {
           return <Button key={item} text={item.toString()} clickHandler={onClickNumber} />
        })

    }

    return (
        <section className="numbers">
            {renderButtos(onClickNumber)}
        </section>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired,
}

export default Numbers;