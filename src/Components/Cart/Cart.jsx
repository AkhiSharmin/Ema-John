import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  //price
  let totalPrice = 0;
  //shipping
  let totalShipping = 0;
  //quantity
  let quantity = 0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const totalTax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + totalTax;

  //   console.log("my cart", cart);
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price:{totalPrice}$</p>
      <p>Total Shipping:{totalShipping}$</p>
      <p>Tax:{totalTax.toFixed(2)}$</p>
      <h6>Grand Total:{grandTotal.toFixed(2)}$</h6>
    </div>
  );
};

export default Cart;
