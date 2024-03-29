import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='footer-cont' id="footer-cont">
                <h2>For Better Experience <br></br> </h2>
                <h4 >Download The App</h4>
                <div className='footer-apps'>
                    <img className='playstore' src={assets.play_store}></img>
                    <img className='appstore' src={assets.app_store}></img>
                </div>



            </div>
            <div className='footer' id="footer">
                 <div className="footer-left">
                    <img className='logo'  src={assets.logo}></img>
                    <p>A food website is a digital platform to share recipes, cooking tips,<br></br> or information about food products and services.
                        <br></br> Creating an excellent food website can be challenging,<br></br> particularly in terms of presenting content in an appealing way.</p>
                  <div className="socialmedia">
                    <img className='social-logo' src={assets.facebook_icon}></img>
                    <img className='social-logo' src={assets.linkedin_icon}></img>
                    <img className='social-logo' src={assets.twitter_icon}></img>
                  </div>
                </div>

                <div className="footer-center">
                    <h3>Company</h3>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Delviry</li>
                    <li>PrivacyPolicy</li>

                </div>
                <div className="footer-right">
                    <h3>Get In Touch</h3>
                    <p className='num'>+91 9392683813</p>
                    <p className='mail'> contact@gmail.com</p>

                </div>  
            </div>
        </div>
    )
}

export default Footer