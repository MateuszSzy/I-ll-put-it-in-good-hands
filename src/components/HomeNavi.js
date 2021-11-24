import React from 'react';
import {Link} from 'react-scroll';
import "./../scss/styles/HomeNavi.scss";


const HomeNavi = () => {
    return (
        <>
            <nav className="navigation__container">
                <Link  to="home">Start</Link>
                <Link  to="treecolumns" spy={true} smooth={true}>O co chodzi?</Link>
                <Link  to="about" spy={true} smooth={true}>O nas</Link>
                <Link  to="organization" spy={true} smooth={true}>Fundacja i organizacje</Link>
                <Link  to="contact" spy={true} smooth={true}>Kontakt</Link>
            </nav>
        </>
    );
};

export default HomeNavi;