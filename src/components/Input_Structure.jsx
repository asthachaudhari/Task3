import React from "react";
import '../pages/Forms_Structure'

function Input_Structure({label_value, type_value, id_value, value, onchange_value, placeholder_value}) {
    return (
        <div className="input-align">
            <label htmlFor={id_value}>{label_value}</label>
            <input className="input"
                id={id_value}
                type={(type_value)?type_value:"text"}
                name={id_value}
                value={value}
                onChange={onchange_value}
                placeholder={placeholder_value}
            />
        </div>
    )
}

export default Input_Structure;