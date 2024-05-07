import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/titlecards/titlecards.jsx'
import Footer from '../../components/footer/footer.jsx'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt='' className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt='' className='caption-img'/>
          <p>Drake has a BBL lol😂</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt=''/>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt=''/>More Info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"BlockBuster Movies!"}/>
        <Titlecards title={"Nah tf is this??"}/>
        <Titlecards title={"Where's BarbenHaimer"}/>
        <Titlecards title={"Huh???"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home