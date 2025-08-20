import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_img from "../../assets/hero_img.jpg"
import hero_tittle from "../../assets/hero_tittle_2.png"
import info from "../../assets/icons8-info.png"
import play from "../../assets/icons8-play.png"
import TittleCard from '../../components/TittleCards/TittleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_img} alt="" className='banner-img' style={{backgroundColor:'white'}}/>
        <div className="hero-caption">
          <img src={hero_tittle} alt="" className='caption-img'/>
          <p>Back in the past, Hakan steals something from Vizier and sees a familiar face; Zeynep strives to prove her loyalty to the Immortals. Content collapsed. </p>
          <div className="hero-btn">
            <button className="btn"><img src={play} alt="" />Play</button>
            <button className="btn dark-btn"><img src={info} alt="" />More info</button>
          </div>
          <TittleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TittleCard tittle={"Blockbuster Movie"} category={"top_rated"}/>
      <TittleCard tittle={"Only on Netflix" } category={"popular"}/>
      <TittleCard tittle={"Upcoming"} category={"upcoming"}/>
      <TittleCard tittle={"Top Pic For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
