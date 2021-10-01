import React from "react";
import "../LoginLink/LoginLink";
import Button from "../Button/Button";

const Hero = ({value, handleLogout}) => {

    return ( 
        <section className="hero">
            <Button value={value} func={handleLogout} />
        </section>
    );
}
 
export default Hero;