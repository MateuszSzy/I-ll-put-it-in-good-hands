import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "./../scss/styles/HomeHeader.scss";
import header from './../assets/Home-Hero-Image.jpg';
import decoration from './../assets/Decoration.svg';
import HomeNavi from "./HomeNavi";


const HomeHeader = () => {

    return (
        <div className="header__container">
            <div className="header__picture">
                <img className="header__picture__img" src={header} alt="Logo" />
            </div>
            <div className="header__content">
                <div className="header__top">
                    <div className="header__top__log">
                        <nav className="header__top__log__navi">
                            <Link to="/HomeLogin">Zaloguj</Link>
                            <Link to="/HomeRegistration">Załóż konto</Link>
                        </nav>
                    </div>
                    <HomeNavi />
                </div>

                <div className="header__bottom">
                    <p className="header__bottom__text">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce </p>
                    <img className="header__bottom__decoration" src={decoration} alt="Logo" />
                    <div className="header__bottom__btn">
                        <button className="header__bottom__btn__left"><Link to="/HomeLogin">Oddaj <br/>rzeczy</Link></button>
                        <button className="header__bottom__btn__right"><Link to="/HomeLogin">Zorganizuj <br/>zbiórkę</Link></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeHeader;