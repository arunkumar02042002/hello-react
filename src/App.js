
import Products from "./components/products/Products";
import Header from "./components/layout/Header";
import Subheader from "./components/layout/Subheader";


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Subheader></Subheader>
      <Products></Products>
    </div>
  );
}

export default App;
