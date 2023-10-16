import React from "react";

function DropDown_Structure({label_value, options_value, id_value, value, onchange_value}) {
    return (
        <div className="input-align">
          <label htmlFor={id_value}>{label_value}</label>
          <select className="input-dropdown"
            id={id_value}
            name={id_value}
            value={value}
            onChange={onchange_value}
          >
            {options_value.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
    )
}

export default DropDown_Structure;