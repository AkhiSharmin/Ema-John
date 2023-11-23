import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
const Shop = () => {
  //products state
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  // slice state
  //   const [displayCount, setSliceData] = useState(10);

  // loaded data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.slice(0, 20).map((product) => (
          <Product
            product={product}
            key={product.id}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
