import React from "react";
import Button from "../../components/Button/Button";

const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError} = props;

    return ( 
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                    type="text" 
                    autoFocus required value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="password" 
                    required value={password}
                    onChange={(e) => setPassword((e).target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <Button value="Sign in" func={handleLogin}/>
                            <p>
                                Dont have an account ? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <Button value="Sign up" func={handleSignup} />
                            <p>
                                Have an account ? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
     );
}
 
export default Login;