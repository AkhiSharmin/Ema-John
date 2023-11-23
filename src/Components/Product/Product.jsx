import "./Product.css";
const Product = ({ product, handelAddToCart }) => {
  const { id, img, name, seller, ratings, price } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: {price}$</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>
      <button onClick={() => handelAddToCart(product)} className="btn-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
