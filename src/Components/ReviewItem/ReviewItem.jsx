import { FaTrash } from "react-icons/fa";
import "./ReviewItem.css";

const ReviewItem = ({ product, handelRemoveFromCart }) => {
  const { id, img, price, name, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price <span className="orangeText">{price}$</span>
        </p>
        <p>
          OrderQuantity <span className="orangeText">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handelRemoveFromCart(id)} className="btn-delete">
        {" "}
        <FaTrash />{" "}
      </button>
    </div>
  );
};

export default ReviewItem;
