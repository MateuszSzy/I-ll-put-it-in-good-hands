import React from "react";
import "./../scss/styles/HomeContact.scss";
import decoration from "../assets/Decoration.svg";
import sweater from "../assets/Background-Contact-Form.jpg";
import HomeUseForm from "./HomeUseForm";
import validate from "./HomeValidateInfo";


const HomeContact = () => {

    const {handleChange, values, handleSubmit, errors} = HomeUseForm(validate);

    return (
            <div className="contact__container" id="contact">
                <div className="contact__pic">
                    <img className="contact__pic__show" src={sweater} alt="sweater" />
                </div>
                <div className="contents">
                    <p className="contents__title">Skontaktuj się z nami</p>
                    <img className="contents__decoration" src={decoration} alt="Logo" />
                    <form className="contents__form" onSubmit={handleSubmit}>
                        <div className="contents__form__date">
                            <div className="contents__form__date__name">
                                <label htmlFor="name">Wpisz swoje imię <br/></label>
                                <input
                                    id="name"
                                    type="name"
                                    name="name"
                                    placeholder=" Enter your name "
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p>{errors.name}</p>}
                            </div>
                            <div className="contents__form__date__email">
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
                        </div>
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea
                            rows="5"
                            cols="33"
                            id="message"
                            name="message"
                            placeholder=" Enter your message "
                            value={values.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p>{errors.message}</p>}
                        <button className="contents__form__btn">Wyślij</button>
                    </form>
                </div>
            </div>
    );
};

export default HomeContact;
