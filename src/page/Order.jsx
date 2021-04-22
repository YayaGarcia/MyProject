import React, { useContext, useState } from "react";
import user from "../assets/icons/747376.svg";
import "../css/Order.css";
import emoji from "../assets/icons/emoji.png";
import { DataContext } from "./DataProvider";
import firebase from "firebase";
import Login from "../utils/Login";
import clock from "../assets/icons/149316.svg";

const Order = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart;

    const [isSignedIn] = useState(false);


    return (
        <div className="containeror">
            <div>

                {isSignedIn ? (
                    <Login />

                ) : (
                    <ul class="acorh">
                        <li>
                            <li>
                                <img src={user} className="user" alt="" />
                            </li>

                            <ul>
                                <a href="/">
                                    <label className="out" onClick={() => firebase.auth().signOut()}>Sign out!</label>
                                </a>

                            </ul>
                        </li>
                    </ul>
                )}

                <ul>
                    <div className="cart">
                        <span className="total">{cart.length} </span>
                    </div>
                </ul>
                <div className="order">
                    <h2 className="my">My
                <img src={emoji} className="emoji" alt="" />
                    </h2>
                    <h2 className="or">Order</h2>
                </div>

                <div className="direc">
                    <h4 className="di">625 St Marks Ave</h4>
                    <h4 className="ed">Edit</h4>
                    <img src={clock} className="clo" alt="" />
                    <h4 className="min">35 min</h4>
                    <h4 className="cho">Choose time</h4>
                </div>
            </div>
        </div>
    );
}

export default Order;