import app from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
    apiKey: "AIzaSyCXFf9IvacLIq4X8VhKD4XmlyVV1LPmJf8",
    authDomain: "myproject-bc262.firebaseapp.com",
    databaseURL: "https://myproject-bc262-default-rtdb.firebaseio.com",
    projectId: "myproject-bc262",
    storageBucket: "myproject-bc262.appspot.com",
    messagingSenderId: "927101916467",
    appId: "1:927101916467:web:a1789d91e6f590bd775a46"
};

class Firebase {
    constructor() {
        app.initialize(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;