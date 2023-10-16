import React from "react";

function CheckList_Structure({label_value, options_value, id_value, value, onchange_value}) {
    return (
        <div >
          <label htmlFor={id_value}>{label_value}</label>
          {options_value.map((product, index) => (
            <React.Fragment key={index}>
              <label htmlFor={id_value}>
                <div >
                <input 
                  type="checkbox"
                  id={id_value}
                  name={id_value}
                  value={product.replace(" ", "_")}
                  onChange={onchange_value}
                />
                {product}
                </div>
              </label>

            </React.Fragment>
          ))}
        </div>
    )
}

export default CheckList_Structure;