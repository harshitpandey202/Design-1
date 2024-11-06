import "./Category.css"
import img21 from "./images/cat1.png"
import img22 from "./images/cat2.png"
import img23 from "./images/cat3.png"
import img24 from "./images/cat4.png"

export default function Category(){
    return(
        <>
         <div className="cat-container">
      {/* Heading */}
      <div className="cat-header">
        <h1 className="cat-title">Find our all category</h1>
        <p className="cat-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corruptin.  <br></br>consequatur odio eos fuga quaerat fugit nulla molestiae!</p>
      </div>

      {/* Deck of Cards */}
      <div className="cat-deck">
        <div className="cat-card">
          <div className="cat-back x1"><img src={img21} className="cat-card-image z1" /></div>
          <h3 className="cat-card-title">Fluffy Cat</h3>
          <p className="cat-card-subtitle">funny puppy</p>
        </div>
        <div className="cat-card">
        <div className="cat-back x2"><img src={img22} className="cat-card-image z2" /></div>
          <h3 className="cat-card-title">Ranjhia Mi</h3>
          <p className="cat-card-subtitle">mishri puppy</p>
        </div>
        <div className="cat-card">
        <div className="cat-back x3"> <img src={img23} className="cat-card-image z3" /></div>
          <h3 className="cat-card-title">Kappa jan</h3>
          <p className="cat-card-subtitle">Racing puppy</p>
        </div>
        <div className="cat-card">
        <div className="cat-back x4"> <img src={img24} className="cat-card-image z4" /></div>
          <h3 className="cat-card-title">Black fodge</h3>
          <p className="cat-card-subtitle">Investing Dog</p>
        </div>
      </div>
    </div>
        </>
    )
};