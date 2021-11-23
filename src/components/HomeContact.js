import React from 'react';
import "./../scss/styles/HomeContact.scss";
import decoration from "../assets/Decoration.svg";
import contact from "../assets/Background-Contact-Form.jpg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";


const HomeContact = () => {
    return (
            <div className="contact__container" id="contact">
                <div className="contents">
                    <p className="contents__title">Skontaktuj się z nami</p>
                    <img className="contents__decoration" src={decoration} alt="Logo" />
                    <div className="contents__form">
                        <div className="contents__form__date">
                            <input placeholder="Imię" type="text"/>
                            <input placeholder="Nazwisko" type="text"/>
                        </div>
                        <input
                            className="contents__form__text"
                            placeholder="Wpisz swoją wiadomość" type="text"
                        />
                        <button className="contents__form__btn">Wyślij</button>
                    </div>

                </div>

            </div>
    );
};

export default HomeContact;
