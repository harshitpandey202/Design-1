import "./Hero.css"
import img2 from "./images/arrow.png"
export default function Hero(){
    return(
        <>
        <div className="center-container">
      <h1 className="heading">The Best place to get<br></br> your favourite pet without <br></br>any doubt</h1>
      <p className="small-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quia, omnis corrupti</p>
      <button className="action-btn"><p>Get Started Now</p>
        <div className="arrow"><img src={img2}></img></div>
      </button>
    </div>
        </>
    )
};