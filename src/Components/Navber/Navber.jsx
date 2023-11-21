import "./Navbar.css";
const Navber = () => {
  return (
    <nav className="header">
      <img
        className="logo"
        src="https://i.pinimg.com/564x/aa/ac/d0/aaacd0529cfd52f58ba74972ada1f259.jpg"
        alt=""
      />
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navber;
