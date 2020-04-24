import React from "react";

export default function Form({
    values,
    changeValues,
    checkboxChange,
    submitOrder,
    disabled,
    errors,
  }) {
    return (
        <form>
        <div className="errors">
            {errors.name}
        </div>
        <label>Name</label>
        <input type="text" name="name" value={values.name} onChange={changeValues} />
        <label>Size</label>
        <select name="size" value={values.size} onChange={changeValues}>
          <option>Choose a Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <label>Gluten Crust</label>
        <label className="switch"><input type="checkbox"/><span className="slider round"></span></label>
        <h2>Toppings</h2>
        <div className="toppings">
          <label>Olives</label>
          <input type="checkbox" name="olives" onChange={checkboxChange} />
          <label>Pepperoni</label>
          <input type="checkbox" name="pepperoni" onChange={checkboxChange} />
          <label>Greenbell Peppers</label>
          <input type="checkbox" name="greenbell" onChange={checkboxChange} />
          <label>Onions</label>
          <input type="checkbox" name="onions" onChange={checkboxChange}/>
        </div>
        <label>Special Instructions</label>
        <input type="text" name="special" onChange={changeValues} />
        <button onClick={submitOrder} disabled={disabled}>Place Order</button>
      </form> 
    )
}