import React, { useContext, useState } from "react";
import "../css/Cart.css";
import "boxicons";
import { DataContext } from "./DataProvider";
import Paypal from "../paypal/Paypal";
import carro from "../assets/icons/carro.svg"

const Cart = () => {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total] = value.total;

    const [checkout, setCheckout] = useState(false);

    const resta = id => {
        cart.forEach(items => {
            if (items.id === id) {
                items.amount === 1 ? items.amount = 1 :
                    items.amount -= 1;
            }
            setCart([...cart])
        })
    }

    const suma = id => {
        cart.forEach(items => {
            if (items.id === id) {
                items.amount += 1;
            }
            setCart([...cart])
        })
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to suspend the product?")) {
            cart.forEach((items, index) => {
                if (items.id === id) {
                    items.amount = 1;
                    cart.splice(index, 1)
                }
            });
            setCart([...cart])
        }
    }

    return (
        <div className="carts" >
            <div className="cart">
                <div>
                    <div className="cart_center">
                        {
                            cart.length === 0 ? <h6 style={{
                                textAlign: "center", fontSize: "2rem", paddingBottom: "2rem"
                            }}>Carrito Vacio</h6> : <>

                                {cart.map((product) => (
                                    <div className="cart_id">
                                        <img src={product.image} className="Img" alt="" />
                                        <div>
                                            <h3>{product.name}</h3>
                                            <p className="price1">${product.price}</p>
                                        </div>
                                        <div>
                                            <box-icon name="up-arrow" type="solid" onClick={() => suma(product.id)}></box-icon>
                                            <p className="cantidad">{product.amount}</p>
                                            <box-icon name="down-arrow" type="solid" onClick={() => resta(product.id)}></box-icon>
                                        </div>
                                        <div className="remove_id" onClick={() => removeProduct(product.id)} >
                                            <box-icon name="trash" type="solid"></box-icon>
                                        </div>
                                    </div>
                                ))}
                                <div className="crr">
                                    <div className="delivery">
                                        <img src={carro} className="carro" alt="" />
                                    </div>
                                    <h3 className="delive">Delivery</h3>
                                    <p className="pric">$0.00</p>
                                </div>
                            </>

                        }

                    </div>
                </div>

                <div className="cart_foot">

                    <h3>Total: ${total} </h3>
                    <br /> <hr /> <br />
                </div>

               {checkout ? (
                     <Paypal />
                ) : (
                    <button className="btn3"
                        onClick={() => {
                             setCheckout(true)
                         }}>
                         Checkout
                         <box-icon name='right-arrow-alt'></box-icon>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Cart;