import React from 'react';
import "./../scss/styles/HomeLogout.scss";
import decoration from "../assets/Decoration.svg";
import { Routes, Route, Link } from "react-router-dom";

const HomeLogout = () => {
    return (
        <>
            <div className="login">
                <nav className="login__head">
                    <Link  to="/HomeLogin">Zaloguj</Link>
                    <Link  to="/HomeRegistration" >Załóż konto</Link>
                </nav>
                <nav className="login__header">
                    <Link  to="/">Start</Link>
                    <Link  to="/" >O co chodzi?</Link>
                    <Link  to="/" >O nas</Link>
                    <Link  to="/" >Fundacja i organizacje</Link>
                    <Link  to="/" >Kontakt</Link>
                </nav>
            </div>

            <div className="logout__container">
                <h1>Wylogowanie nastąpiło <br/> pomyślnie!</h1>
                <img src={decoration} alt="Logo" />
                <div className="start">
                    <Link  to="/">Strona główna</Link>
                </div>

            </div>

        </>

    );
};

export default HomeLogout;