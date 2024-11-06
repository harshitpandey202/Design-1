import img1 from "./images/logo.png"
import './Header.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logodiv">
        <img src={img1} alt="Logo" className="logo" /></div>
      </div>
      <div className="navbar-center">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
