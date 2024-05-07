import React from 'react';
import './footer.css';
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-icons">
        <img src={youtube_icon} alt=""/>
        <img src={instagram_icon} alt=""/>
        <img src={twitter_icon} alt=""/>
        <img src={facebook_icon} alt=""/>
       </div>
       <ul>
        <li>Contact Us</li>
        <li>Bro yk this web is good</li>
        <li>Meet the Grahams</li>
        <li>Lol</li>
       </ul>
       <p className="copyright-text">This Project is Licenced by Kaarshe, Mercy and Lenny!™ 2024</p>
    </div>
  )
}

export default Footer