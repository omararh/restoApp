import React, { useState, useEffect } from 'react';
import MenuService from '../services/menuService';
import '../componants/product.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const res = new MenuService().getMenu();
            setData(res);
        };
        fetchData();
    }, []);

    const filterData = data.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase());
    });

    const navigate = useNavigate();
    const handelClick = (productId) => {
        navigate(`/details/${productId}`);
    }
    return (
       <div >
        <input type = "text"
        className = "searchBar"
        placeholder = "Recherche"
        onChange = { e => setQuery(e.target.value) }
        /> 
        <div className = "menu" > {
            filterData.map(item => ( 
            <div key = { item.id }
                className = "text-center shadow-lg p-5 rounded-xl my-1 dark:bg-white flex-1 cursor-pointer hover:bg-gray-200 font-thin"
                onClick = { () => handelClick(item.id) } >
                <h2 className = "elementName" > { item.name } </h2>                 
                <p className = "elementDescription" > { item.description } </p> 
                <p className = "elementPrice" > { item.price }£ </p>
            </div>
            ))
        } </div> 
        </div> 
        

    );
}

export default Products;