import React, {useState} from 'react';
import "./../scss/styles/HomeLogin.scss";
import decoration from "../assets/Decoration.svg";
import { Routes, Route, Link } from "react-router-dom";
import HomeUseForm from "./HomeUseForm";
import validate from './HomeValidateInfo';


const HomeLogin = () => {
    const {handleChange, values, handleSubmit, errors} = HomeUseForm(validate);

    return (

        <>
            <div className="login">
                <nav className="login__head">
                    <Link  to="/HomeLogin">Zaloguj</Link>
                    <Link  to="/HomeRegistration" >Załóż konto</Link>
                    <Link  to="/HomeLogout">Wyloguj się</Link>
                </nav>
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
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__email">
                        <label htmlFor="email">Wpisz swój email <br/></label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder=" Enter your email "
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className="login__password">
                        <label htmlFor="password">Password (6 characters minimum)</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder=" Enter your password "
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    <div className="log__button">
                        <button className="log__button__add" type="submit"><Link  to="/HomeRegistration" >Załóż konto</Link></button>
                        <button className="log__button__log" type="submit">Zaloguj</button>
                    </div>
                </form>
             </div>
        </>

    );
};

export default HomeLogin;
