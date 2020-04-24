import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../src/App.css";
// import "../Assets/Pizza.jpg"

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="navigation">
          <h1>Lambda Eats</h1>
          <nav>
            <Route>
              <Link to="/">Home</Link>
              <Link to="/order">Order</Link>
              <Link>Help</Link>
            </Route>
          </nav>
        </div>
      </header>
      <section>
        <Route path="/">
          <div className="hero">
            <img src={require("./Assets/Pizza.jpg")} alt="a pizza" />
          </div>
          <h2>Order Now!</h2>
          <p>Special Deal Today only!</p>
        </Route>
        <Route path="/order">
          <form>
            <h2>Your Order</h2>
            <label>Size</label>
            <input />
            <h2>Toppings</h2>
            <input />
            <label>Size</label>
            <input />
          </form>
        </Route>
      </section>
      <footer></footer>
    </div>
  );
};
export default App;
