import React from "react";
  

function TextArea_Structure({label_value, id_value, value, onchange_value, placeholder_value}) {
    return (
        <div className="input-align">
            <label htmlFor={id_value}>{label_value}</label>
            <textarea className="input"
                id={id_value}
                name={id_value}
                value={value}
                onChange={onchange_value}
                placeholder={placeholder_value}
            ></textarea>
        </div>
    )
}

export default TextArea_Structure;