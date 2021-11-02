import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

const Functions = ({ onContenClear, onDelete }) => {
    return (
        <section className="functions">
            <Button type="button-long-text" text="clear" clickHandler={onContenClear} />
            <Button text="&larr;" clickHandler={onDelete} />
        </section>
    )
}

Functions.propTypes = {
    onContenClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;