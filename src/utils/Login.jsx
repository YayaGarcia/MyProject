import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//import user from "../assets/icons/747376.svg";
import { Link } from "react-router-dom"



firebase.initializeApp({
    apiKey: "AIzaSyCXFf9IvacLIq4X8VhKD4XmlyVV1LPmJf8",
    authDomain: "myproject-bc262.firebaseapp.com"
})

class Login extends Component {
    
    state = { isSignedIn: false }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        return (

            <div className="Login">

                {this.state.isSignedIn ? (
                    <span>
                        <Link to="/inicio">
                            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                        </Link>
                    </span >
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        )
    }
}

export default Login;