import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./utils/Login";
import Header from "./page/Header";
import Contect from "./page/Contect";
import Letter from "./page/Letter";
import Menu from "./page/Menu";
import Order from "./page/Order";
import Cart from "./page/Cart";

function Pages() {
    return (

        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/inicio" exact component>
                <div id="menu">
                    <Header />
                    <br />
                    <Contect />
                    <br />
                    <Letter />
                    <br />
                    <Menu />
                </div>
                <div id="section2">
                    <Order />
                    <br />
                    <Cart />
                </div>
            </Route>
        </Switch>

    );
}

export default Pages;