import "../index.css"
import { Link } from "react-router";
import Home from "./Home";
const Navbar = () => {
  return (
    <div className="parent">
      <div className="navbar">
        <div className="left">
          <h4>logo</h4>
        </div>
        <div className="right">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/About">
            <h4>About</h4>
          </Link>
          <Link to="/Contact">
            <h4>Contact</h4>
          </Link>
          <Link to="/Course">
            <h4>Course</h4>
          </Link>
          <Link to="/Product">
            <h4>Product</h4>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar