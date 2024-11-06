import "./Banner.css"
import img41 from "./images/left-one.png"
import img42 from "./images/right-one.png"
export default function Banner(){
    return(
        <>
        <div className="banner-container">
      {/* Left part */}
      <div className="banner-left">
      <div className="left-img"></div>
       <img src={img41} className="banner-small-image-left" />
      </div>

      {/* Center part */}
      <div className="banner-center">
        <h2 className="banner-title">Get special gift!</h2>
        <p className="banner-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui, ipsam vel soluta dignissimos, maiores assumenda earum, accusantium corrupti laboriosam ab cumque aperiam illo sint.</p>
        <button className="banner-btn">Contact us</button>
      </div>

      {/* Right part */}
      <div className="banner-right">
      <div className="right-img"></div>
      <img src={img42} className="banner-small-image-right" />
      </div>
    </div>
        </>
    )
}