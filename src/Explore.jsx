import "./Explore.css"
import img4 from "./images/1.jpg"
import img5 from "./images/2.jpg"
import img6 from "./images/3.jpg"
import img7 from "./images/4.jpg"

export default function Explore(){
    return(
        <>
        <div className="main">
        <div className="expore-heading"><p>Explore our Feature</p></div>
        <div className="explore-subhead"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Mollitia distinctio quidem quo hic eum itaque.</p></div>
        <div className="cards">
            <div className="card">
                <img src={img4}></img>
                <p className="expore-title">Multi-color Pet</p>
                <p className="expore-subhead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="card">
                <img src={img5}></img>
                <p className="expore-title">Quality Pet </p>
                <p className="expore-subhead">Lorem ipsum, dolor sit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
                <img src={img6}></img>
                <p className="expore-title">Doctor Advise</p>
                <p className="expore-subhead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="card">
                <img src={img7}></img>
                <p className="expore-title">Home delivery</p>
                <p className="expore-subhead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>
        </div>
        </>
    )
}