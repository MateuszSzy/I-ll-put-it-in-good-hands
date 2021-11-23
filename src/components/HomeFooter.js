import React from 'react';
import "./../scss/styles/HomeFooter.scss";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

const HomeFooter = () => {
    return (
            <div className="contact__footer">
                <p className="contact__footer__title">Copyright by Coders Lab</p>
                <div className="contact__footer__icon">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
    );
};

export default HomeFooter;