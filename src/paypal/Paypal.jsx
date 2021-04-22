import React, { useEffect, useContext } from "react";
import { useRef } from "react/cjs/react.development";
import "paypal-checkout"
import { DataContext } from "../page/DataProvider";

function Paypal() {

    const paypal = useRef();
    const value = useContext(DataContext)
    const [total] = value.total

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                value: total
                            }
                        }
                    ]
                })
            },

            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                alert("El pago fue realizado");
            },

            onError: (err) => {
                console.log(err);
                alert("El pago no fue realizado, vuelva a intentarlo");
            },

            onCancel: (data) => {
                alert("El pago no fue realizado, el usuario canceló el proceso");
            }
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;