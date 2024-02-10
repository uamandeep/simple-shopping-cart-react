// App.js
import React, { useState } from "react";
import Product  from "./Product";
import Cart  from "./Cart";


function App() {
  const [cartItems, setCartItems] = useState([]);


  const addProductToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  return (
    <div className="App">
      <Product name="iPhone 13" onClick={() => addProductToCart("iPhone 13")} />
      <Cart items={cartItems} />
    </div>
  );
}


export default App;
