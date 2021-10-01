import React, { useState, useEffect} from "react";
import fire from "../firebase/fire";
import Login from "../../pages/LoginPage/LoginPage";
import "./LoginLink.css";
import Hero from "../Hero/Hero";

const LoginLink = () => { 

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    };

    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };


    useEffect(() => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }, []);

    return (
        <div className="loginLink">
            {user ? (
                <div className="login">
                    <div className="loginContainer">
                        <div className="logout__img">
                            <img 
                                src="https://i.pinimg.com/236x/13/32/a4/1332a43a025051e31ac5a551e51a772d--street-magic-tricks-magic-tricks-revealed.jpg" 
                                alt="LOL" 
                            />
                        </div>
                        <h4>You can do what u wanna do</h4>
                        <Hero className="hero__button" value="Log out" handleLogout={handleLogout}/>
                    </div>  
                </div>
            ) : (
                <Login 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError} 
                />
            )}
        </div>
    );
};
 
export default LoginLink;