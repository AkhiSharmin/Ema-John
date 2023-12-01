import { Link } from "react-router-dom";
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
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navber;
