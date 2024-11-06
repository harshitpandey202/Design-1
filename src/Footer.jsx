import "./Footer.css"
import img51 from "./images/logo.png"
import img52 from "./images/facebook.png"
import img53 from "./images/twiiter.png"
import img54 from "./images/linkedin.png"
export default function Footer(){

    return(
        <>
         <footer className="footer-container">
      {/* Left part of the footer */}
      <div className="footer-left">
        <img src={img51} alt="Logo" className="footer-logo" />
        <p className="footer-description">Lorem ipsum dolor sit amet consectetur adipisici<br></br>ng elit. Commodi eveniet id nesciunt laboriosam,<br></br>natus corrupti!</p>
      </div>

      {/* Right part of the footer */}
      <div className="footer-right">
        <div className="footer-social-icons">
          <a href="https://facebook.com" className="footer-icon"><img src={img52}alt="Facebook" /></a>
          <a href="https://twitter.com" className="footer-icon"><img src={img53}alt="Twitter" /></a>
          <a href="https://linkedin.com" className="footer-icon"><img src={img54} alt="LinkedIn" /></a>
        </div>

        <div className="footer-links">
          <a href="#link1" className="footer-link">Collection</a>
          <a href="#link2" className="footer-link">All pets</a>
          <a href="#link3" className="footer-link">Privacy Policy</a>
          <a href="#link4" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
        </>
    )
};