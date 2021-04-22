import React from "react";
import Categories from "../assets/fonts/categories.json";
import "../css/Letter.css";
import arrow from "../assets/icons/118740.svg";

const Letter = () => {
    return (
        <div className="containerle">
            {Categories.map((category) => {
                return (
                    <div key={category.id} className="card" style={{ width: '2.6rem' }}>
                        <img src={category.icon} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title"> {category.name} </h6>
                        </div>
                    </div>
                )
            })}
            <button type="button" className="bnt">
                <img src={arrow} className="arrow" alt="" />
            </button>
        </div>
    );
}

export default Letter;