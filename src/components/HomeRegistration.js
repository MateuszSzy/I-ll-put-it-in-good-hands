import React from 'react';
import "./../scss/styles/HomeRegistration.scss";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";


const HomeRegistration = () => {
    return (
        <>
            <div className="registration">
                <nav className="registration__header">
                    <Link  to="/">Start</Link>
                    <Link  to="/" >O co chodzi?</Link>
                    <Link  to="/" >O nas</Link>
                    <Link  to="/" >Fundacja i organizacje</Link>
                    <Link  to="/" >Kontakt</Link>
                </nav>
            </div>

            <div className="registration__container">
                <h1 className="registration__title">Zarejestruj się</h1>
                <img className="registration__decoration" src={decoration} alt="Logo" />
                <form className="registration__form">
                    <div className="registration__email">
                        <label htmlFor="email">Wpisz swój email <br/></label>
                        <input
                            placeholder="aaa@zzz.pl" type="text"
                        />
                    </div>

                    <div className="registration__password">
                        <label htmlFor="pass">Password (8 characters minimum):</label>
                        <input type="password" id="pass" name="password"
                               minLength="8" required placeholder="********"
                        />
                    </div>

                    <div className="registration__password">
                        <label htmlFor="pass">Repeat Password (8 characters minimum):</label>
                        <input type="password" id="pass" name="password"
                               minLength="8" required placeholder="********"
                        />
                    </div>
                </form>
                <div className="registration__button">
                    <input type="submit" value="Załóż konto" />
                    <input type="submit" value="Zaloguj się" />
                </div>

            </div>
        </>

    );
};

export default HomeRegistration;
