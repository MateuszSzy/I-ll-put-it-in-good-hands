import React from 'react';
import "./../scss/styles/HomeContact.scss";
import decoration from "../assets/Decoration.svg";
import sweater from "../assets/Background-Contact-Form.jpg";


const HomeContact = () => {
    return (
            <div className="contact__container" id="contact">
                <div className="contact__pic">
                    <img className="contact__pic__show" src={sweater} alt="sweater" />
                </div>
                <div className="contents">
                    <p className="contents__title">Skontaktuj się z nami</p>
                    <img className="contents__decoration" src={decoration} alt="Logo" />
                    <div className="contents__form">
                        <div className="contents__form__date">
                            <label for="name">Do you like cheese?</label>
                            <input placeholder="Imię" type="text" name="name"/>
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
