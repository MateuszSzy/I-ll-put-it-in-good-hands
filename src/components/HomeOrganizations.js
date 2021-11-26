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


const HomeOrganizations = () => {

    const [data,setData] = useState([]);

    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage,setItemPerPage] = useState(5);


    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


    const pages =[];
    for(let i = 1; i <= Math.ceil(data.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <div className="organization__container" id="organization">
            <h1>Komu pomagamy?</h1>
            <img className="contents__decoration" src={decoration} alt="Logo" />
            <Tabs>
                <div label="Fundacjom">
                    <p>Super fundacje</p>
                    {renderData(currentItems)}
                    <ul className="pageNumbers">
                        {renderPageNumbers}
                    </ul>
                </div>
                <div label="Organizacją pozarządowym">
                    <p>Super organizacje</p>

                </div>
                <div label="Lokalnym zbiórkom">
                    <p>Super zbiórki</p>

                </div>
            </Tabs>
        </div>
    );
};

export default HomeOrganizations;
