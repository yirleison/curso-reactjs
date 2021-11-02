import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

const MathOperations = ({ onClickOperation, onClickEquals }) => {

    return (
        <section className="math-operations">
            <Button text="+" clickHandler={onClickOperation}/>
            <Button text="-" clickHandler={onClickOperation}/>
            <Button text="*" clickHandler={onClickOperation}/>
            <Button text="/" clickHandler={onClickOperation}/>
            <Button text="=" clickHandler={onClickEquals}/>
        </section>

    )

}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEquals: PropTypes.func.isRequired
}

export default MathOperations;

