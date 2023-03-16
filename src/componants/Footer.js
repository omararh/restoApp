import React from 'react';
import '../componants/footer.css';
import FaFacebook from '../assets/facebook-f.svg';
import FaInstagram from '../assets/instagram.svg';
import FaPhone from '../assets/phone-solid.svg';

const Footer = () => {
    return (
         
         <div className = "footer p-10 flex-1 font-thin">
             <div className="adresse font-thin">
                <p className = "adress">Adresse : 115 Boulevard Jean moulin</p>
             </div>
            <div className="links">
                <img src = {FaFacebook} alt = "facebook" className = "facebook-icon"/>
                <img src = {FaInstagram} alt = "instagram" className = "instagram-icon"/> 
                <button onClick = {() => alert("+33752591564")}>
                    <img src = {FaPhone} alt = "phone" className = "phone-icon"/>
                </button>
            </div>
         </div>
    )   
}   

export default Footer;
