import React, { createContext, useState, useEffect } from "react";
import Data from "../assets/products";

export const DataContext = createContext();

const DataProvider = (props) => {
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const product = Data.items
        if (product) {
            setProducts(product)
        }
        else {
            setProducts([])
        }
    }, [])

    const addCart = (id) => {
        const check = cart.every(items => {
            return items.id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product is already in the cart")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart")
        )
        if (dataCart) {
            setCart(dataCart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("dataCart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, items) => {
                return prev + (items.price * items.amount);
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cart])
    
    const value = {
        products: [products],
        menu: [menu, setMenu],
        cart: [cart, setCart],
        addCart: addCart,
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;