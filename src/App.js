import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Form from "./components/Form";
import "../src/App.css";
import * as yup from "yup";
import axios from "axios";
// import "../Assets/Pizza.jpg"

// const databaseUrl = "https://reqres.in/"

const initialFormValues = {
  name: "",
  size: "",
  olives: false,
  pepperoni: false,
  greenbell: false,
  onions: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  olives: "",
  pepperoni: "",
  greenbell: "",
  onions: "",
  special: "",
};

const formValidation = yup.object().shape({
  name: yup
    .string()
    .min(2, "username must have at least 2 characters!")
    .required("username is required!"),
  size: yup.string(),
  olives: yup.string(),
  pepperoni: yup.string(),
  greenbell: yup.string(),
  onions: yup.string(),
  special: yup.string(),
});

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formDisabled, setFormDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const changeValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    yup
      .reach(formValidation, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        // dangit, does not validate :(
        // SET THE ERROR IN THE RIGHT PLACE
        console.log(err);
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    formValidation.isValid(formValues).then((valid) => {
      setFormDisabled(!valid);
    });
  }, [formValues]);

  const checkboxChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  const postOrder = (order) => {
    axios.post("https://reqres.in/api/orders", order)
    .then(res => {
      console.log(res)
      setOrders([...orders, res.data]);
    })
    .catch(err => {
      debugger
    })  
    
  };

  const submitOrder = (event) => {
    event.preventDefault();

    const newOrder = {
      name: formValues.name,
      size: formValues.email,
      olives: formValues.olives,
      pepperoni: formValues.pepperoni,
      greenbell: formValues.greenbell,
      onions: formValues.onions,
      special: formValues.special,
    };

    
    // console.log(newUser)
    postOrder(newOrder);
    setFormValues(initialFormValues);
  };

  return (
    <div className="container">
      <header>
        <div className="navigation">
          <h1>Lambda Eats</h1>
          <nav>
            <Route path="/">
              <Link to="/home">Home</Link>
              <Link to="/pizza">Order</Link>
              <Link to="/help">Help</Link>
            </Route>
          </nav>
        </div>
      </header>
      <section>
        <Route path="/home">
          <div class="heroContainer">
          <img src={require("./Assets/Pizza.jpg")} alt="a pizza" />
            <div className="hero">
              
              <h2>Order Now!</h2>
              <p>Special Deal Today only!</p>
          
            </div>
          </div>
        </Route>
        <Route path="/pizza">
          <Form
            values={formValues}
            changeValues={changeValues}
            checkboxChange={checkboxChange}
            submitOrder={submitOrder}
            disabled={formDisabled}
            errors={formErrors}
          />
          <div>
            <h2>ORDERS</h2>
            {orders.map((order) => {
              return (
                <div>
                  <h3>{order.name}</h3>
                  <p>sauce: Original</p>
                  <p>{order.size}</p>
                  <p>Special Instructions: {order.special}</p>
                </div>
              );
            })}
          </div>
        </Route>
      </section>
      <footer></footer>
    </div>
  );
};
export default App;
