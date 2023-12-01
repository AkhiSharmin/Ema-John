import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

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

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step 1 get id of the added product
    for (const id in storedCart) {
      //step-2 get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step-4 add the added product to the saved cart
        savedCart.push(addedProduct);
      }

      // console.log("added products", addedProduct);
    }
    //step-5 set the cart
    setCart(savedCart);
  }, [products]);

  const handelAddToCart = (product) => {
    // const newCart = [...cart, product];

    let newCart = [];
    const exists = cart.find((pb) => pb.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
