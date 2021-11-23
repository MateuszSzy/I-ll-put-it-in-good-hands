import React from 'react';
import "./../scss/styles/HomeFooter.scss";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

const HomeFooter = () => {
    return (
        <div className="contact__footer">
            <p>Copyright by Coders Lab</p>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
        </div>
    );
};

export default HomeFooter;