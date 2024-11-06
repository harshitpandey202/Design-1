import "./Record.css"
import img31 from "./images/record-profile.png"
import img32 from "./images/record-left.jpg"
import img33 from "./images/record-right.png"
export default function Record(){
    return(
        <>
        <div className="record-container">
      {/* Title and Subtitle */}
      <div className="record-header">
        <h1 className="record-title">Pet lovers words from <br></br>our records</h1>
        <p className="record-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> voluptatem dolor ullam, dolorum inventor!</p>
      </div>

      {/* Third Part: Split into left and right sections */}
      <div className="record-third">
        {/* Left side with image */}
        <div className="record-left">
          <img src={img32}className="record-main-image" />
        </div>

        {/* Right side with profile, description, and small image */}
        <div className="record-right">
          <div className="record-profile">
            <img src={img31} alt="Profile" className="record-profile-photo" />
            <p className="name">Arnoid jeff</p>
            <p className="position">Pet Collector</p>
            <p className="record-description">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum asperiores exercitationem praesentium corporis vitae modi recusandae, veritatis fuga sequi, ipsa cum minus soluta odit"</p>
          </div>
          <div className="record-small-image">
            <img src={img33} alt="Small Image" className="record-small-img" />
          </div>
        </div>
      </div>
    </div>
        </>
    )
};