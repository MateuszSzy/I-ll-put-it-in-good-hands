import React from 'react';
import "./../scss/styles/HomeTreeColumns.scss";


const HomeTreeColumns = () => {
    return (
        <div className="columns__container">

            <div className="column">
                <p className="column__numb">10</p>
                <p className="column__title">Oddanych worków</p>
                <p className="column__description">Lorem ipsum dolor sit amet,
                    consectetur adipisc <br/> Pellentesque vel enim a elit viverra
                    elementuma.<br/> Aliquam erat volutpat.
                </p>
            </div>

            <div className="column">
                <p className="column__numb">5</p>
                <p className="column__title">Wspartych organizacji</p>
                <p className="column__description">Lorem ipsum dolor sit amet,
                    consectetur adipisc <br/> Pellentesque vel enim a elit viverra
                    elementuma.<br/> Aliquam erat volutpat.
                </p>
            </div>

            <div className="column">
                <p className="column__numb">7</p>
                <p className="column__title">Zorganizowanych zbiórek</p>
                <p className="column__description">Lorem ipsum dolor sit amet,
                    consectetur adipisc <br/> Pellentesque vel enim a elit viverra
                    elementuma.<br/> Aliquam erat volutpat.
                </p>
            </div>
        </div>
    );
};

export default HomeTreeColumns;
