import React, { useContext } from "react";
import "../css/Menu.css";
import Star from "../assets/icons/149220.svg";
import { DataContext } from "./DataProvider";

const MenuItem = ({ id, name, qualification, time, price, image }) => {

    const value = useContext(DataContext);
    const addCart = value.addCart;

    return (
        <div className="container-mn">
            <div key={id} className="products">
                <div>
                    <img src={image} className="img" alt="..." />
                    <div className="time"> {time} </div>
                </div>
                <div className="product_body">
                    <h5 className="title1"> {name} </h5>
                    <img src={Star} className="star" alt="" />
                    <div className="qualification"> {qualification} </div>
                    <div className="price"> $ {price} </div>
                </div>
                <div className="product_footer">
                    <button className="btn1" onClick={() => addCart(id)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;