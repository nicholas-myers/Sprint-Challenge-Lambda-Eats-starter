import React from "react";

export default function Form({
    values,
    changeValues,
    checkboxChange,
    submitUser,
    disabled,
    errors,
  }) {
    return (
        <form>
        <h2>Your Order</h2>
        <div className="errors">
            {errors.name}
        </div>
        <label>Name</label>
        <input type="text" name="name" value={values.name} onChange={changeValues} />
        <label>Size</label>
        <select onChange={changeValues}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <h2>Toppings</h2>
        <label>Olives</label>
        <input type="checkbox" />
        <label>Pepperoni</label>
        <input type="checkbox" />
        <label>Greenbell Peppers</label>
        <input type="checkbox" />
        <label>Onions</label>
        <input type="checkbox" />
        <label>Special Instructions</label>
        <input type="text" onChange={changeValues} />
        <button disabled={disabled}>Place Order</button>
      </form> 
    )
}