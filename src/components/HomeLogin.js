import React from 'react';
import "./../scss/styles/HomeLogin.scss";
import decoration from "../assets/Decoration.svg";
import { Routes, Route, Link } from "react-router-dom";


const HomeLogin = () => {
    return (
        <>
            <div className="login">
                <nav className="login__header">
                    <Link  to="/">Start</Link>
                    <Link  to="/" >O co chodzi?</Link>
                    <Link  to="/" >O nas</Link>
                    <Link  to="/" >Fundacja i organizacje</Link>
                    <Link  to="/" >Kontakt</Link>
                </nav>
            </div>

            <div className="login__container">
                <h1 className="login__title">Zaloguj się</h1>
                <img className="login__decoration" src={decoration} alt="Logo" />
                <form className="login__form">
                    <div className="login__email">
                        <label htmlFor="email">Wpisz swój email <br/></label>
                        <input
                            placeholder="aaa@zzz.pl" type="text"
                        />
                    </div>

                    <div className="login__password">
                        <label htmlFor="pass">Password (8 characters minimum):</label>
                        <input type="password" id="pass" name="password"
                               minLength="8" required placeholder="********"
                        />
                    </div>
                </form>
                <div className="log__button">
                    <input type="submit" value="Załóż konto" />
                    <input type="submit" value="Zaloguj się" />
                </div>

             </div>
        </>

    );
};

export default HomeLogin;
