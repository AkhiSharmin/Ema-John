import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
