import React from "react";
import "../css/Contect.css";
import hsen from "../assets/images/headerimage.png";
import confetti from "../assets/images/d.png";
import fleizq from "../assets/icons/109617.svg";
import hamburger from "../assets/icons/1046784.svg";
import clock from "../assets/icons/149316.svg";
import fleaba from "../assets/icons/118740.svg";

const Contect = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="promocion">
              <img src={hsen} className="hsen" alt=""></img>
              <h1 className="pro">$0 delivery for 30 days!
                  <img src={confetti} className="confetti" alt=""></img>
              </h1>
              <h4 className="des">$0 delivery fee for orders over $10 for 30 days</h4>
              <br />
              <h5 className="learn">Learn more
                  <img src={fleizq} className="fleizq" alt=""></img>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="restaurants">Restaurants
              <img src={hamburger} className="hamburger" alt=""></img>
            <button type="button" className="btn">
              <img src={clock} className="clock" alt="" />
              <p className="deli">Delivery: <dt>Now</dt> </p>
              <img src={fleaba} className="fleaba" alt=""></img>
            </button>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Contect;