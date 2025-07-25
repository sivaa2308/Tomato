import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

        
        <div className="footer-content-left">

            <Link to='/'><img src={assets.logo} alt="" /></Link>

            <p>Taste the best of both worlds — where traditional recipes meet modern flavors. Every dish is crafted with care, using the freshest ingredients to deliver a dining experience you’ll remember</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>

        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 90XXXXXXXX</li>
                <li>contact@tomato.com</li>
            </ul>

        </div>
      
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
