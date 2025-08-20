import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"
import bell from "../../assets/bell.svg"
import profile from "../../assets/profile.png"
import caret from "../../assets/caret.svg"
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add("nav-dark")
      }
      else{
        navRef.current.classList.remove("nav-dark")
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className='icon'/>
        <p>Children</p>
        <img src={bell} alt="" className='icon'/>
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile'/>
          <img src={caret} alt="" className='caret'/>
          <div className="dropdown">
            <p onClick={()=>logout()}>Sign Out</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Navbar
