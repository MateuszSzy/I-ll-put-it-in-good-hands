import React,{Component} from 'react';

import "./../scss/styles/HomeGiveBack.scss";

import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import HomeNavi from "./HomeNavi";
import HomeForm from "./HomeForm";
import header from "../assets/Form-Hero-Image.jpg";
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";

const HomeGiveBack = () => {
    return (
       <>
           <div className="header__container">
               <div className="header__picture">
                   <img className="header__picture__img" src={header} alt="Logo" />
               </div>
               <div className="header__content">
                   <div className="header__top">
                       <div className="header__top__log">
                           <nav className="header__top__log__navi">
                               <Link to="/HomeGiveBack">Oddaj rzeczy</Link>
                               <Link to="/HomeLogout">Wyloguj</Link>
                           </nav>
                       </div>
                       <HomeNavi />
                   </div>

                   <div className="header__bottom">
                       <p className="header__bottom__text">Oddaj rzeczy, których już nie chcesz <br/> <span>POTRZEBUJĄCYM</span></p>
                       <img className="header__bottom__decoration" src={decoration} alt="Logo" />
                       <p>Wystarczą 4 proste kroki:</p>
                       <div className="square__container">
                           <div className="square">
                               <div className="square__text">
                                   <h2>1</h2>
                                   <p>Wybierz <br/> rzeczy</p>
                               </div>
                           </div>
                           <div className="square">
                               <div className="square__text">
                                   <h2>2</h2>
                                   <p>Spakuj je<br/>w worki</p>
                               </div>
                           </div>
                           <div className="square">
                               <div className="square__text">
                                   <h2>3</h2>
                                   <p>Wybierz<br/>fundację</p>
                               </div>
                           </div>
                           <div className="square">
                               <div className="square__text">
                                   <h2>4</h2>
                                   <p>Zamów<br/>kuriera</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>


           </div>
           <div className="give__container">
               <h1>div cały</h1>
               <HomeForm />
           </div>

           <HomeContact />
           <HomeFooter />
       </>
    );
};

export default HomeGiveBack;