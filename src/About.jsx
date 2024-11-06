import "./About.css"
import img11 from "./images/about1.png"
import img12 from "./images/about2.png"
import img13 from "./images/about3.png"
import img14 from "./images/arrow.png"

export default function About(){
    return(
  <>
   <div className="about-container">
      {/* Left side with images */}
      <div className="about-left">
        <div className="about d1">
        <img src={img11} className="about-image i1" />
        <p className="About1-para">White Puppy</p>
        <div className="arrow-margin"><img src={img14} className="about-arrow"></img></div>
        </div>
        <div className="about d2">
        <img src={img12}  className="about-image i2" />
        <p className="About1-para">Tommy puppy</p>
        <div className="arrow-margin"><img src={img14} className="about-arrow"></img></div>
        </div>
        <div className="about d3">
        <img src={img13} className="about-image i3" />
        <p className="About1-para">Baby Puppy</p>
        <div className="arrow-margin"><img src={img14} className="about-arrow"></img></div>
        </div>
        
        
       
      </div>

      {/* Right side with title, sub-para, and button */}
      <div className="about-right">
        <h2 className="about-title">About Us</h2>
        <p className="about-subpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore exercitationem suscipit sequi quisquam vero rem ad odit, eligendi recusandae perferendis. Harum libero eveniet nam.
        </p>
        <p className="about-nextpara"> &#10003;   Most awaited feature installed here.</p>
        <div className="about-btmn">
        <button className="about-btn">Learn More</button>
        <button className="about-btn">Learn More</button>
        </div>
      </div>
     
    </div>
  </>
    )
};