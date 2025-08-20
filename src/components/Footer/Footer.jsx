import React from 'react'
import './Footer.css'
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"
import twitter from "../../assets/twitter.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Tems of Uses</li>
        <li>Privacy</li>
        <li>Cookie Prefrence</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text'>1997-2023 Netflix , Inc.</p>
    </div>
  )
}

export default Footer
