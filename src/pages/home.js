import React from 'react'
import avatar from '../assets/avatar-chef.jpg'
import '../pages/home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
    const handelClick = () => {
        navigate('/');
    }

    return (
        <div className = "home">

            <div className="home-content">
                <h2 className="home-title">Make remote work</h2>
                <p className="home-description">Get your team in sync, no matter your location.<br /> Streamline processes, 
                                       create team rituals, and<br /> watch productivity soar.</p>

                <button className="home-submit" onClick = {() => handelClick()}>Commendez !</button>
            </div>
            <img src= {avatar} alt="IMG" className="home-img"/>
           
        </div>
    )
}

export default Home;
