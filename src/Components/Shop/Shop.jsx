import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
const Shop = () => {
  //products state
  const [products, setProducts] = useState([]);

  // slice state
  //   const [displayCount, setSliceData] = useState(10);

  // loaded data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.slice(0, 20).map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
      </div>
    </div>
  );
};

export default Shop;
