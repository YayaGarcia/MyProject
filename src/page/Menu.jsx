import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import MenuItem from "./MenuItem";

const Menu = () => {
    const value = useContext(DataContext);
    const [products] = value.products;

    return (
        <>
            <div className="cont">
                {
                    products.map(product => (
                        <MenuItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            qualification={product.qualification}
                            time={product.time}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Menu;