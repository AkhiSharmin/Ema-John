import "./Product.css";
const Product = ({ product }) => {
  const { img, name, seller, quantity, price } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
