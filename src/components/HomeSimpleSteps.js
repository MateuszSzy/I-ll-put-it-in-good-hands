import React from 'react';
import "./../scss/styles/HomeSimpleSteps.scss";
import decoration from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";


const HomeSimpleSteps = () => {
    return (
        <div className="steps__container" id="treecolumns">
            <p className="steps__container__title">Wystarczą 4 proste kroki</p>
            <img className="steps__container__decoration" src={decoration} alt="Logo" />

            <div className="steps__activities">
                <div className="steps__column">
                    <img className="steps__column__pic" src={icon1} alt="icon1" />
                    <p className="steps__column__title">Wybierz rzeczy</p>
                    <p className="steps__column__description">
                        ubrania, zabawki,<br/> sprzęt i inne
                    </p>
                </div>

                <div className="steps__column">
                    <img className="steps__column__pic" src={icon2} alt="icon2" />
                    <p className="steps__column__title">Spakuj je</p>
                    <p className="steps__column__description">
                        skorzystaj z <br/> worków na śmieci
                    </p>
                </div>

                <div className="steps__column">
                    <img className="steps__column__pic" src={icon3} alt="icon" />
                    <p className="steps__column__title">Zdecyduj komu <br/> chcesz pomóc</p>
                    <p className="steps__column__description">
                        wybierz zaufane <br/> miejsce
                    </p>
                </div>

                <div className="steps__column">
                    <img className="steps__column__pic" src={icon4} alt="icon" />
                    <p className="steps__column__title">Zamów kuriera</p>
                    <p className="steps__column__description">
                        kurier przyjedzie <br/> w dogodnym terminie
                    </p>
                </div>
            </div>

            <button className="steps__container__btn"><Link to="/HomeLogin">Oddaj <br/>rzeczy</Link></button>
        </div>
    );
};

export default HomeSimpleSteps;

