import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../src/App.css";
import * as yup from "yup"
// import "../Assets/Pizza.jpg"

const App = () => {

  const initialFormValues = {
    name: "",
    size: "",
    olives: "",
    pepperoni: "",
  };
  
  const initialFormErrors = {
    username: "",
    email: "",
    password: "",
    terms: "",
  };
  
  const formValidation = yup.object().shape({
    name: yup
      .string()
      .min(3, "username must have at least 3 characters!")
      .required("username is required!"),
    email: yup
      .string()
      .email("a VALID email is required")
      .required("email is required"),
    password: yup
    .string()
    .matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/, "Password must contain one lowercase letter, one uppercase letter and a number")
    .required("password is required"),
    terms: yup
      .boolean()
      .oneOf([true], "terms are required"),
  });

  return (
    <div className="container">
      <header>
        <div className="navigation">
          <h1>Lambda Eats</h1>
          <nav>
            <Route path="/">
              <Link to="/home">Home</Link>
              <Link to="/pizza">Order</Link>
              <Link>Help</Link>
            </Route>
          </nav>
        </div>
      </header>
      <section>
          <Route path="/home">
            <div>
              <div className="hero">
                <img src={require("./Assets/Pizza.jpg")} alt="a pizza" />
              </div>
              <div>
                <h2>Order Now!</h2>
                <p>Special Deal Today only!</p>
              </div>
            </div>
          </Route>
          <Route path="/pizza">
            <form>
              <h2>Your Order</h2>
              <label>Name</label>
              <input type="text" />
              <label>Size</label>
              <select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
              <h2>Toppings</h2>
              <label>Olives</label>
              <input type="checkbox"/>
              <label>Pepperoni</label>
              <input type="checkbox"/>
              <label>Greenbell Peppers</label>
              <input type="checkbox"/>
              <label>Onions</label>
              <input type="checkbox" />
              <label>Special Instructions</label>
              <input type="text" />
              <button>Place Order</button>
            </form>
          </Route>
       
      </section>
      <footer></footer>
    </div>
  );
};
export default App;
