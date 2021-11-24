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
                            <form className="contents__form__date__name">
                                <label htmlFor="name">Wpisz swoje imię <br/></label>
                                <input
                                    placeholder="Imię" type="text" name="name"
                                />
                            </form>
                            <form className="contents__form__date__email">
                                <label htmlFor="mail">Wpisz swój email <br/></label>
                                <input
                                    placeholder="abc@xyz.pl" type="text"
                                />
                            </form>
                        </div>
                        <label htmlFor="story">Wpisz swoją wiadomość</label>
                        <textarea id="story" name="story" rows="5"
                                  cols="33" placeholder="Wpisz swoją wiadomość"
                        />

                        <button className="contents__form__btn">Wyślij</button>
                    </div>
                </div>
            </div>
    );
};

export default HomeContact;
