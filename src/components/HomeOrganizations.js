import React, {useEffect, useState} from 'react';
import "./../scss/styles/HomeOrganizations.scss";
import decoration from "../assets/Decoration.svg";
import Tabs from "./HomeTabs";

const renderData = data => {
    return(
        <ul>
             {data.map((todo,index) => {
                return <li key={index}>{todo.title}</li>;
            })}
        </ul>
    )
}

const renderDataSec = data => {

    return(
        <ul>
             {data.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>;
            })}
        </ul>
    )
}


const HomeOrganizations = () => {

    const [data,setData] = useState([]);

    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage,setItemPerPage] = useState(3);


    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


    const [maxPageNumberLimitSec, setMaxPageNumberLimitSec] = useState(2);
    const [minPageNumberLimitSec, setMinPageNumberLimitSec] = useState(0);


    const pages =[];
    for(let i = 1; i <= Math.ceil(data.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


    const indexOfLastItemSec = currentPage * itemsPerPage;
    const indexOfFirstItemSec = indexOfLastItem - itemsPerPage;
    const currentItemsSec = data.slice(indexOfFirstItemSec,indexOfLastItemSec);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const renderPageNumbers = pages.map(number => {

        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null
        }
    });

    const renderPageNumbersSec = pages.map(number => {

        if(number < maxPageNumberLimitSec + 1 && number > minPageNumberLimitSec){
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null
        }
    });


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <div className="organization__container" id="organization">
            <h1>Komu pomagamy?</h1>
            <img className="organization__decoration" src={decoration} alt="Logo" />
            <div className="organization__description">
                <Tabs>
                    <div label="Fundacjom">
                        <p className="organization__content">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. <br/>A, aut commodi culpa
                            deserunt distinctio dolore dolorum <br/>facere
                            ipsa, laudantium minima nostrum odit quas
                            quiddam <br/>quidedddm, rem reprehenderit tenetur
                            voluptate voluptatibus.
                        </p>
                        <ul className="pageNumbers">
                            <li className="pageNumbers__text">{renderData(currentItems)}</li>
                            <li className="pageNumbers__numb">{renderPageNumbers}</li>
                        </ul>
                    </div>
                    <div label="Organizacjom pozarządowym">
                        <p className="organization__content">
                            Lorem sfdsadfsadfsadfsait amet, consectetur
                            adipisicing elit. <br/>A, aut commodi culpa
                            deserunt difdgsdsfgre dolorum <br/>facere
                            ipsa, laudantium minima nostrum odit quas
                            quiddam <br/>quidedddm, rem reprehenderit tenetur
                            voluptate volujhgbus.
                        </p>
                        <ul className="pageNumbers">
                            <li className="pageNumbers__text">{renderDataSec(currentItemsSec)}</li>
                            <li className="pageNumbers__numb">{renderPageNumbersSec}</li>
                        </ul>
                    </div>
                    <div label="Lokalnym zbiórkom">
                        <p className="organization__content">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. <br/>A, auodi culpa
                            deserunt distinctio dolore dolorum <br/>facere
                            ipsa, laudantkkjhlhkjlnima nostrum odit quas
                            quiddam <br/>quidedddm, rem rhgjkherit tenetur
                            voluptate voluptatibus.
                        </p>
                        <ul className="pageNumbers">
                            <li className="pageNumbers__text">{renderData(currentItems)}</li>
                        </ul>
                    </div>
                </Tabs>
            </div>

        </div>
    );
};

export default HomeOrganizations;
