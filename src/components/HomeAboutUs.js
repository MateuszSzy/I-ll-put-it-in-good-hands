import React from 'react';
import "./../scss/styles/HomeAboutUs.scss";
import aboutUs from "../assets/People.jpg";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";


const HomeAboutUs = () => {
    return (
        <div className="about__container" id="about">
            <div className="about__contents">
                <p className="about__contents__title">O nas</p>
                <img className="about__contents__decoration" src={decoration} alt="Logo" />
                <p className="about__contents__description">
                    Nori grape silver beet broccoli kombu beet <br/>greens fava bean potato
                    quandong celery.<br/> Bunya nuts black-eyed pea prairie turnip leek<br/>
                    lentil turnip greens parsnip.
                </p>
                <img className="about__contents__signature" src={signature} alt="Signature" />
            </div>
            <div className="about__pic">
                <img className="about__pic__img" src={aboutUs} alt="aboutUs" />
            </div>
        </div>
    );
};

export default HomeAboutUs;
