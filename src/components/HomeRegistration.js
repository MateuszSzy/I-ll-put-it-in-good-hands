import React from 'react';
import "./../scss/styles/HomeRegistration.scss";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import HomeUseForm from "./HomeUseForm";
import validate from './HomeValidateInfo';


const HomeRegistration = () => {

    const {handleChange, values, handleSubmit, errors} = HomeUseForm(validate);

    return (
        <>
            <div className="registration">
                <nav className="registration__head">
                    <Link  to="/HomeLogin">Zaloguj</Link>
                    <Link  to="/HomeRegistration" >Załóż konto</Link>
                </nav>
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
                <form className="registration__form" onSubmit={handleSubmit}>
                    <div className="registration__email">
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

                    <div className="registration__password">
                        <label htmlFor="password">Password (6 characters minimum):</label>
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

                    <div className="registration__password">
                        <label htmlFor="password2">Repeat Password (6 characters minimum):</label>
                        <input
                            id="password2"
                            type="password"
                            name="password2"
                            placeholder=" Enter your password2 "
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>

                    <div className="registration__button">
                        <button className="registration__button__add" type="submit">Załóż konto</button>
                        <button className="registration__button__log" type=""><Link  to="/HomeLogin" >Zaloguj</Link></button>
                    </div>
                </form>
            </div>
        </>

    );
};

export default HomeRegistration;
