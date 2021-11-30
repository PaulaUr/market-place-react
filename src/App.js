import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://reby-front-chanllenge.herokuapp.com/api/getProducts")
      .then((response) => response.json())
      .then(async ({ products }) => {
        setProducts(
          products.map((product) => {
            product.imageUrl = `https://reby-front-chanllenge.herokuapp.com/api/getProductImage/${product.id}/`;
            return product;
          })
        );
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Market Place</h1>
      </header>
      <div className="product-list-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt="" height="200px" />
            <div class="product-card-tile">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
