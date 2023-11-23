import "./Cart.css";

const Cart = ({ cart }) => {
  //price
  let totalPrice = 0;
  //shipping
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const totalTax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + totalTax;

  //   console.log("my cart", cart);
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price:{totalPrice}$</p>
      <p>Total Shipping:{totalShipping}$</p>
      <p>Tax:{totalTax.toFixed(2)}$</p>
      <h6>Grand Total:{grandTotal.toFixed(2)}$</h6>
    </div>
  );
};

export default Cart;
