
import Products from "./components/products/Products";
import Header from "./components/layout/Header";
import Subheader from "./components/layout/Subheader";
import { useState } from "react";

const App = () => {

  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="App">
      <Header count={cartItems}></Header>
      <Subheader></Subheader>
      <Products></Products>
    </div>
  );
}

export default App;
